import { useState } from 'react'
import LabTwButtons_mp from './lab/My_project/LabTwButtons_mp'
import LabTwAlert_mp from './lab/My_project/LabTwAlert_mp'
import LabTwCard_mp from './lab/My_project/LabTwCard_mp'
import LabTwForm_mp from './lab/My_project/LabTwForm_mp'
import LabTwTable_mp from './lab/My_project/LabTwTable_mp'

type LabKey = 'buttons' | 'alert' | 'card' | 'form' | 'table'

export default function AppLab_mp() {
  const [lab, setLab] = useState<LabKey>('buttons')

  return (
    <div className="min-h-screen bg-slate-950">
      <div className="flex items-center gap-4 border-b border-white/10 bg-slate-900 px-4 py-2">
        <span className="font-bold text-white text-sm">LAB Veterinaria</span>
        <select
          className="rounded-lg border border-white/10 bg-slate-800 px-3 py-1 text-sm text-white outline-none"
          value={lab}
          onChange={e => setLab(e.target.value as LabKey)}
        >
          <option value="buttons">Botones</option>
          <option value="alert">Avisos</option>
          <option value="card">Fichas</option>
          <option value="form">Formulario</option>
          <option value="table">Tabla</option>
        </select>
      </div>

      {lab === 'buttons' && <LabTwButtons_mp />}
      {lab === 'alert' && <LabTwAlert_mp />}
      {lab === 'card' && <LabTwCard_mp />}
      {lab === 'form' && <LabTwForm_mp />}
      {lab === 'table' && <LabTwTable_mp />}
    </div>
  )
}
