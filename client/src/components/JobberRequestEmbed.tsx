interface JobberRequestEmbedProps {
  className?: string;
}

export function JobberRequestEmbed({ className = "" }: JobberRequestEmbedProps) {
  return (
    <div className={className}>
      {/* Anchor for jump-links */}
      <div id="request"></div>
      
      {/* Jobber embedded request form */}
      <div 
        className="jobber-form-wrapper mx-auto px-4 py-6"
        style={{ maxWidth: "960px" }}
      >
        <iframe
          src="https://clienthub.getjobber.com/client_hubs/477b530d-4299-4b26-a9f2-f6059a7649f1/public/work_request/embedded_work_request_form?utm_source=website&utm_medium=embed&utm_campaign=hh-main"
          width="100%"
          height="1200"
          style={{ border: 0, overflow: "auto" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Request service"
          data-testid="iframe-jobber-request"
        />
      </div>
    </div>
  );
}