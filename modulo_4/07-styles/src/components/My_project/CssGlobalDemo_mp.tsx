import '../../styles/My_project/global_mp.css'

export default function CssGlobalDemo_mp() {
  return (
    <div className="veteCard">
      <h3 className="veteTitle">Ficha con CSS global</h3>
      <p style={{ margin: 0, color: 'var(--muted)' }}>
        Las clases veteCard y veteTitle viven en un archivo css normal, si otro
        componente usa el mismo nombre se pisan.
      </p>
    </div>
  )
}
