import {
  Award,
  FolderGit2,
  FlaskConical,
  ShieldCheck,
} from "lucide-react";
import projects from "../../data/projects";
import labs from "../../data/labs";
import certifications from "../../data/certifications";
import "./Stats.css";

function Stats() {
  const stats = [
    {
      value: projects.length,
      label: "Security Projects",
      icon: FolderGit2,
    },
    {
      value: labs.length,
      label: "Hands-On Labs",
      icon: FlaskConical,
    },
    {
      value: certifications.length,
      label: "Certifications",
      icon: Award,
    },
    {
      value: "24/7",
      label: "Security Mindset",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="stats">
      <div className="stats-container">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div className="stat-item" key={stat.label}>
              <Icon size={20} />
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Stats;
