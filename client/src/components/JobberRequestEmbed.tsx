export function JobberRequestEmbed() {
  return (
    <>
      {/* anchor for #request links */}
      <div id="request" style={{ scrollMarginTop: '100px' }} />

      {/* full-width wrapper, centered */}
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <iframe
          title="Request Service"
          src="https://clienthub.getjobber.com/client_hubs/477b530d-4299-4b26-a9f2-f6059a7649f1/public/work_request/embedded_work_request_form?utm_source=website&utm_medium=embed&utm_campaign=hh-main"
          width="100%"
          height="1800"                 // plenty tall so it doesn't clip
          style={{ display: 'block', border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}