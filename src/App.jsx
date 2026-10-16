import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Braces,
  Check,
  Code2,
  Database,
  ExternalLink,
  Languages,
  Layers,
  LayoutTemplate,
  Maximize2,
  Menu,
  X,
} from 'lucide-react';
import { Github, Linkedin } from './BrandIcons.jsx';
import portrait from '../media/optimized/ulises-fernandez.webp';
import personalPortrait from '../media/optimized/ulises-personal.webp';
import { profile, getProjects, getSkillGroups } from './data.js';
import { useLanguage } from './i18n.jsx';

const filters = ['all', 'full-stack', 'frontend'];

function ExternalAnchor({ href, className, children, ...props }) {
  const { copy } = useLanguage();
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
      <span className="sr-only">{copy.newTab}</span>
    </a>
  );
}

function Header() {
  const { copy, language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const menuButton = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-15% 0px -45% 0px' },
    );
    document.querySelectorAll('main > section[id]').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    function dismiss(event) {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    }
    document.addEventListener('keydown', dismiss);
    return () => document.removeEventListener('keydown', dismiss);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#home" aria-label={copy.header.home} onClick={() => setMenuOpen(false)}>
          <span className="brand-mark" aria-hidden="true">uf.</span>
          <span>Ulises <span className="brand-surname">Fernández</span></span>
        </a>
        <nav id="main-navigation" className={`main-navigation${menuOpen ? ' is-open' : ''}`} aria-label={copy.header.navigation}>
          <a href="#projects" aria-current={activeSection === 'projects' ? 'location' : undefined} onClick={() => setMenuOpen(false)}>{copy.header.projects}</a>
          <a href="#about" aria-current={activeSection === 'about' ? 'location' : undefined} onClick={() => setMenuOpen(false)}>{copy.header.about}</a>
          <a className="nav-contact" href="#contact" aria-current={activeSection === 'contact' ? 'location' : undefined} onClick={() => setMenuOpen(false)}>
            {copy.header.contact} <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </nav>
        <div className="header-controls">
          <button
            className={`language-toggle language-${language}`}
            type="button"
            onClick={toggleLanguage}
            aria-label={copy.switchLanguage}
            title={copy.switchLanguage}
          >
            <Languages size={17} aria-hidden="true" />
            <span className="language-options" aria-hidden="true">
              <span lang="en" className={language === 'en' ? 'is-selected' : ''}>EN</span>
              <span lang="es" className={language === 'es' ? 'is-selected' : ''}>ES</span>
            </span>
          </button>
          <button
            className="menu-toggle icon-button"
            type="button"
            ref={menuButton}
            aria-label={menuOpen ? copy.header.close : copy.header.open}
            aria-controls="main-navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const { copy } = useLanguage();
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1 id="hero-title"><span>{copy.hero.greeting}</span><span>{copy.hero.headline}</span></h1>
          <p className="hero-introduction">{copy.hero.introduction}</p>
          <p className="hero-description">{copy.hero.description}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">{copy.hero.action} <ArrowDown size={17} aria-hidden="true" /></a>
            <ExternalAnchor href={profile.github} className="button button-quiet"><Github size={19} aria-hidden="true" /> GitHub</ExternalAnchor>
          </div>
        </div>
        <figure className="portrait-composition">
          <div className="portrait-backdrop" aria-hidden="true" />
          <div className="portrait-frame">
            <img src={portrait} alt={copy.hero.photoAlt} width="1086" height="1448" fetchPriority="high" />
          </div>
          <div className="portrait-code" aria-hidden="true"><Braces size={31} strokeWidth={1.8} /></div>
          <figcaption className="portrait-caption">
            <span className="caption-icon" aria-hidden="true"><Code2 size={20} /></span>
            <span>{copy.hero.role}<span className="caption-secondary">{copy.hero.caption}</span></span>
          </figcaption>
        </figure>
      </div>
      <div className="container toolkit">
        <span className="toolkit-label">{copy.hero.toolkit}</span>
        <ul aria-label={copy.hero.technologies}>
          <li><span className="tech-symbol react-symbol" aria-hidden="true">⚛</span>React</li>
          <li><span className="tech-symbol node-symbol" aria-hidden="true">JS</span>Node.js</li>
          <li><Braces size={21} aria-hidden="true" />Python</li>
          <li><Database size={20} aria-hidden="true" />SQL</li>
          <li><Github size={20} aria-hidden="true" />Git</li>
        </ul>
      </div>
    </section>
  );
}

function ProjectActions({ project, onOpen }) {
  const { copy } = useLanguage();
  return (
    <div className="project-actions">
      <button className="button button-project" type="button" onClick={() => onOpen(project)} aria-label={copy.project.exploreLabel(project.name)}>
        {copy.project.explore} <ArrowUpRight size={17} aria-hidden="true" />
      </button>
      <div className="project-external-links">
        {project.liveUrl && (
          <ExternalAnchor href={project.liveUrl} className="project-live-link" aria-label={copy.project.liveLabel(project.name)}>
            {copy.project.live} <ExternalLink size={15} aria-hidden="true" />
          </ExternalAnchor>
        )}
        <ExternalAnchor href={project.repository} className="icon-button source-link" aria-label={copy.project.sourceLabel(project.name)}>
          <Github size={20} aria-hidden="true" />
        </ExternalAnchor>
      </div>
    </div>
  );
}

function ProjectCard({ project, featured, onOpen }) {
  const { copy } = useLanguage();
  return (
    <article className={`project-card project-${project.theme}${featured ? ' project-featured' : ''}`} aria-labelledby={`${project.id}-title`}>
      <div className="project-image-panel">
        <button className="project-preview" type="button" onClick={() => onOpen(project)} aria-label={copy.project.previewLabel(project.name)}>
          <span className="browser-bar" aria-hidden="true">
            <span className="browser-dots"><i /><i /><i /></span>
            <span className="browser-label">{project.previewLabel}</span>
          </span>
          <img src={project.image} alt={project.imageAlt} width={project.imageWidth} height={project.imageHeight} loading="lazy" decoding="async" />
          <span className="preview-expand" aria-hidden="true"><Maximize2 size={17} /></span>
        </button>
      </div>
      <div className="project-content">
        <p className="project-category">{project.categoryLabel}</p>
        <h3 id={`${project.id}-title`}>{project.name}</h3>
        <p className="project-tagline">{project.tagline}</p>
        <p className="project-description">{project.description}</p>
        <ul className="technology-list" aria-label={copy.project.technologies(project.name)}>
          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <ProjectActions project={project} onOpen={onOpen} />
      </div>
    </article>
  );
}

function ProjectDialog({ project, onClose }) {
  const { copy } = useLanguage();
  const dialogRef = useRef(null);
  const projectId = project?.id;

  useEffect(() => {
    if (!projectId) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    if (!dialog.open) dialog.showModal();
    return () => {
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
    };
  }, [projectId]);

  function closeOnBackdrop(event) {
    if (event.target !== event.currentTarget) return;
    const rect = event.currentTarget.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) {
      dialogRef.current.close();
    }
  }

  return (
    <dialog ref={dialogRef} className="project-dialog" aria-labelledby="dialog-title" onClose={onClose} onClick={closeOnBackdrop}>
      {project && (
        <>
          <div className="dialog-heading">
            <div><p className="project-category">{project.categoryLabel}</p><h2 id="dialog-title">{project.name}</h2></div>
            <button className="icon-button dialog-close" type="button" aria-label={copy.project.close} autoFocus onClick={() => dialogRef.current.close()}><X size={24} /></button>
          </div>
          <div className={`dialog-image project-${project.theme}`}><img src={project.image} alt={project.imageAlt} width={project.imageWidth} height={project.imageHeight} /></div>
          <div className="dialog-content">
            <p className="dialog-context">{project.context}</p>
            <h3>{copy.project.features}</h3>
            <ul className="feature-list">{project.features.map((feature) => <li key={feature}><Check size={18} aria-hidden="true" /><span>{feature}</span></li>)}</ul>
            <h3>{copy.project.implementation}</h3>
            <p>{project.implementation}</p>
            {project.note && <p className="project-note">{project.note}</p>}
            <div className="dialog-actions">
              {project.liveUrl && <ExternalAnchor className="button button-primary" href={project.liveUrl}>{copy.project.website} <ExternalLink size={16} aria-hidden="true" /></ExternalAnchor>}
              <ExternalAnchor className="button button-secondary" href={project.repository}><Github size={18} aria-hidden="true" />{copy.project.source}</ExternalAnchor>
            </div>
          </div>
        </>
      )}
    </dialog>
  );
}

function Projects() {
  const { copy, language } = useLanguage();
  const projects = useMemo(() => getProjects(language), [language]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const selectedProject = projects.find((project) => project.id === selectedProjectId);
  const visibleProjects = projects.filter((project) => activeFilter === 'all' || project.category === activeFilter);

  function openProject(project) {
    setSelectedProjectId(project.id);
  }

  return (
    <section className="projects-section container" id="projects" aria-labelledby="projects-title">
      <div className="section-heading projects-heading">
        <div><h2 id="projects-title">{copy.projects.title}</h2><p>{copy.projects.introduction}<br className="desktop-break" /> {copy.projects.description}</p></div>
        <span className="project-count">{copy.projects.selected} <span>{projects.length}</span></span>
      </div>
      <div className="project-filters" role="group" aria-label={copy.projects.filterLabel}>
        {filters.map((filter) => (
          <button key={filter} className={`filter-button${activeFilter === filter ? ' is-active' : ''}`} aria-pressed={activeFilter === filter} type="button" onClick={() => setActiveFilter(filter)}>{copy.projects.filters[filter]}</button>
        ))}
      </div>
      <p className="sr-only" role="status" aria-live="polite">{copy.projects.shown(visibleProjects.length)}</p>
      <div className="project-grid">
        {visibleProjects.map((project) => <ProjectCard key={project.id} project={project} featured={project.featured && activeFilter === 'all'} onOpen={openProject} />)}
      </div>
      <div className="projects-footnote"><Github size={18} aria-hidden="true" /><span>{copy.projects.footnote}</span><ExternalAnchor href={profile.github}>{copy.projects.github} <ExternalLink size={14} aria-hidden="true" /></ExternalAnchor></div>
      <ProjectDialog project={selectedProject} onClose={() => setSelectedProjectId(null)} />
    </section>
  );
}

const skillIcons = { layout: LayoutTemplate, code: Code2, database: Database, layers: Layers };

function About() {
  const { copy, language } = useLanguage();
  const skillGroups = getSkillGroups(language);
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="container about-grid">
        <figure className="about-portrait">
          <img src={personalPortrait} alt={copy.about.photoAlt} width="2000" height="1483" loading="lazy" decoding="async" />
        </figure>
        <div className="about-story">
          <div className="about-copy">
            <h2 id="about-title">{copy.about.title}</h2>
            <p>{copy.about.introduction}</p>
            <p>{copy.about.description}</p>
            <ExternalAnchor className="text-link" href={profile.linkedin}>{copy.about.linkedin} <ArrowUpRight size={17} aria-hidden="true" /></ExternalAnchor>
          </div>
          <ul className="skills-grid" aria-label={copy.about.skills}>
            {skillGroups.map((group) => {
              const Icon = skillIcons[group.icon];
              return (
                <li className="skill-group" key={group.icon}>
                  <span className={`skill-icon skill-icon-${group.icon}`}>
                    <Icon size={23} aria-hidden="true" />
                  </span>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <span className="skill-tools">{group.tools}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { copy } = useLanguage();
  return (
    <section className="contact-section container" id="contact" aria-labelledby="contact-title">
      <div className="contact-panel">
        <div><h2 id="contact-title">{copy.contact.title[0]}<br />{copy.contact.title[1]}</h2><p>{copy.contact.introduction}<br className="desktop-break" /> {copy.contact.description}</p></div>
        <div className="contact-actions">
          <ExternalAnchor href={profile.linkedin} className="button button-primary"><Linkedin size={19} aria-hidden="true" /> {copy.contact.linkedin} <ArrowUpRight size={17} aria-hidden="true" /></ExternalAnchor>
          <ExternalAnchor href={profile.github} className="contact-github"><Github size={18} aria-hidden="true" /> {copy.contact.github} <ExternalLink size={14} aria-hidden="true" /></ExternalAnchor>
        </div>
      </div>
    </section>
  );
}

function App() {
  const { copy } = useLanguage();
  return (
    <>
      <a className="skip-link" href="#main-content">{copy.skip}</a>
      <p className="sr-only" role="status" aria-live="polite">{copy.languageChanged}</p>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="site-footer container"><p>© {new Date().getFullYear()} {profile.name}</p><a href="#home">{copy.backToTop} <ArrowUp size={15} aria-hidden="true" /></a></footer>
    </>
  );
}

export default App;
