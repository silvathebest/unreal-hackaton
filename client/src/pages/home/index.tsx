import React, {useState} from 'react'
import {DownloadReport} from 'features'
import {Button} from 'shared/overrideMui'

const Home = () => {
  const [isDownloadReportOpen, setIsDownloadReportOpen] = useState(false)

  return (
    <div>
      Home page

      <Button variant='contained' onClick={() => setIsDownloadReportOpen(true)}>
        Загрузить отчет
      </Button>

      <DownloadReport isOpen={isDownloadReportOpen} onClose={() => setIsDownloadReportOpen(false)} />
    </div>
  )
}

export default Home