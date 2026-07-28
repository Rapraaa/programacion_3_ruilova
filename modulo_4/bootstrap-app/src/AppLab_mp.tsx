import { useState } from 'react'
import LabRbButtons_mp from './lab/My_project/LabRbButtons_mp'
import LabRbAlert_mp from './lab/My_project/LabRbAlert_mp'
import LabRbCard_mp from './lab/My_project/LabRbCard_mp'
import LabRbForm_mp from './lab/My_project/LabRbForm_mp'
import LabRbTable_mp from './lab/My_project/LabRbTable_mp'

type LabKey = 'buttons' | 'alert' | 'card' | 'form' | 'table'

export default function AppLab_mp() {
  const [lab, setLab] = useState<LabKey>('buttons')

  return (
    <div>
      <div className="border-bottom bg-light px-3 py-2 d-flex align-items-center gap-3">
        <span className="fw-bold">LAB Veterinaria</span>
        <select
          className="form-select form-select-sm"
          style={{ maxWidth: 180 }}
          value={lab}
          onChange={e => setLab(e.target.value as LabKey)}
        >
          <option value="buttons">Botones</option>
          <option value="alert">Alerta</option>
          <option value="card">Fichas</option>
          <option value="form">Formulario</option>
          <option value="table">Tabla</option>
        </select>
      </div>

      {lab === 'buttons' && <LabRbButtons_mp />}
      {lab === 'alert' && <LabRbAlert_mp />}
      {lab === 'card' && <LabRbCard_mp />}
      {lab === 'form' && <LabRbForm_mp />}
      {lab === 'table' && <LabRbTable_mp />}
    </div>
  )
}
