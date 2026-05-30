export default function ContactMap() {
  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.283173690366!2d80.4726336!3d28.076904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399f43000d362d21%3A0x1524b52551dc3789!2sKS%20makeover%20unisex%20salon!5e0!3m2!1sen!2sin!4v1780157231954!5m2!1sen!2sin" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
        >
        </iframe>
    </div>
  );
}
