import Script from 'next/script'

function Analytics() {
  return (
    <div className="container">
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-HL5GL0WCSP"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-HL5GL0WCSP');
        `}
      </Script>

    </div>
  )
}

export default Analytics