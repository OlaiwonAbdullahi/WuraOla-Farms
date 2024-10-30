import ContactForm from "../components/ContactForm";
import ContactHeader from "../components/ContactHeader";
import Location from "../components/Location";

const Contact = () => {
  return (
    <div>
      <div className="">
        <ContactHeader />
      </div>
      <div className="">
        <Location />
      </div>
      <div className="">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
