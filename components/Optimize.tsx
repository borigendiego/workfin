import React from 'react'
import OptimizeLayout from './OptimizeLayout'

const Optimize = () => {
  return (
    <div>
        <OptimizeLayout
            title='Optimize your processes with WorkFin'
            image='/assets/images/optimize-2.png'
            subtitle='Time and cost savings'
            text='Process all payments and receipts in one login, across multiple entities at the same time.'
            list={
                ['No need to log into different Finance/Accounting instances.',
                'Minimal inter company adjustments-only for statutory purposes.',
                'All bank reconciliations in one place-integrated and with clear audit trails.',
                'Single integrations for 3rd party software – Practitioner/Professional, Supply Chain, Payroll, People Record Management.']
            }
        />
        <OptimizeLayout
            image='/assets/images/optimize-3.png'
            reverse
            subtitle='Business Reporting'
            text='Compare performance between sites and periods for better decisions.'
            list={
                ['Capture finance and accounting data from each business site.',
                'Automate Invoice data capture.',
                'Provide Multi-Site business reporting.',
                'Use forecast reporting to take proactive actions and reduce risk']
            }
        />
        <OptimizeLayout
            image='/assets/images/optimize-2.png'
            subtitle='Site Level Benefits'
            text='Increase productivity and efficiency through process automation.'
            list={
                ['Easy Rostering of team members.',
                'Facial Recognition of time tracking.',
                'Improved safety and security through integrated technologies.']
            }
        />
    </div>
  )
}

export default Optimize
