module.exports = {
  // Used in ejs/includes/faq.ejs
  faqs: [{
    q: 'What is this?',
    a: `
      This is a service that allows you to buy cryptocurrency assets without the
      need for a exchange in just a few minutes.
    `
  }, {
    q: 'Who provides this service?',
    a: `
      The purchasing process is handled by our partners at Simplex.com. This
      page is hosted by MyCrypto.
    `
  }, {
    q: 'Are there any fees?',
    a: 'There is a Simplex fee of 5% or $10 (whichever is higher) and an additional 3% tip to MyCrypto.'
  }, {
    q: 'How long does a transaction take?',
    a: `
      Usually, payments are processed within the hour; however, some cases
      require more attention and can take up to 24 hours to be approved. You
      will receive an email once your payment has been reviewed.

      <br/>
      <br/>

      If your transaction is still pending, it might be because you have yet to
      submit to a verification request. In such cases, an email is sent asking
      for proof of identity or card ownership – which can land in your spam
      folder. In case of delays, please check your spam folder for a
      verification email.

      <br/>
      <br/>

      In some cases your transaction may be cancelled due to price volatility.
      All prices are locked at the time of purchase but if the price changes
      +/- 2.5% of the locked-in rate the transaction will be cancelled.
    `
  }, {
    q: 'I have more questions!',
    a: `
      You can find more help over at the <a href='https://www.simplex.com/faq/'>
      Simplex FAQ page</a>, including an avenue to contact their support.
    `
  }]
}
