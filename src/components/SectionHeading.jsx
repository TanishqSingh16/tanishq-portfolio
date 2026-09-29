export default function SectionHeading({ title, subtitle, id }) {
  return (
    <div className="section-heading reveal">
      <h2 id={id}>{title}</h2>
      <span className="heading-rule" aria-hidden="true" />
      {subtitle && <p>{subtitle}</p>}
    </div>
  )
}