const ContactMap = () => {
  return (
    <div className=" p-4">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.218978774184!2d3.902036868915461!3d7.441006795428047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039ed3239baa9c1%3A0x199cf4117fbf875c!2sUniversity%20of%20Ibadan%20First%20Gate!5e0!3m2!1sen!2sng!4v1730329881775!5m2!1sen!2sng"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        className=" rounded-lg"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactMap;
