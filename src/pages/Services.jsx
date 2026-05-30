import Card from "../components/Card"
import Hair_Treatment from "./../assets/Hair_Treatment.png";
import Skin from "./../assets/Skin.png";
import Makeup from "./../assets/Makeup.png";
import Feet from "./../assets/Feet.png";
import Academy from "./../assets/Academy.jpg";
import Mens from "./../assets/Mens.jpg";
import design from "../assets/design.png"


const Services = () => {

    const servicesList = [
        {
            title: "HAIR SERVICES",
            image: Hair_Treatment,
            description: "Revive and repair your hair with KS expert hair salon in Gola Gokaran Nath. Smooth, shiny, healthy hair with premium, safe products.",
            bullets: [
                "Hair Cut",
                "Hair Wash",
                "Hair Spa",
                "Hair Smoothening",
                "Hair Straightening",
                "Hair Coloring",
                "Hair Styling"
            ]
        },
        {
            title: "SKIN/FACIAL SERVICES",
            image: Skin,
            description: "Unlock your skin's natural radiance with our customized organic facials, skin brightening, and luxury bridal makeup services",
            bullets: [
                "Clean Up",
                "Fruit Facial",
                "Gold Facial",
                "Diamond Facial",
                "Hydra Facial",
                "Skin Polishing"
            ]
        },
        {
            title: "MEN'S GROOMING",
            image: Mens,
            description: "Discover your perfect look with professional haircuts, custom blowouts, coloring, and styling tailored to your unique personality.",
            bullets: [
                "Haircuts",
                "Beard Styling & Shave",
                "Detox Charcoal Face Therapy",
                "Head Wash",
                "Hair Styling",
                "Head Massage"
            ]
        },
        {
            title: "MAKEUP SERVICES",
            image: Makeup,
            description: "Enhance your natural beauty with party, bridal, and special occasion makeup. Expert artists, premium products, and stunning results for every event.",
            bullets: [
                "Party Makeup",
                "Engagement Makeup",
                "Bridal Makeup",
                "HD Makeup",
                "Airbrush Makeup"
            ]
        },
        {
            title: "HAND & FEET SERVICES",
            image: Feet,
            description: "Pamper your hands and feet with manicures, pedicures, nail care, and spa treatments designed to leave you feeling refreshed.",
            bullets: [
                "Manicure",
                "Pedicure",
                "Gel Polish",
                "Nail Art"
            ]
        },
        {
            title: "ACADEMY",
            image: Academy,
            description: "Learn professional makeup, hair styling, and bridal skills with expert training and hands-on practice.",
            bullets: [
                "Pro Makeup Artist Courses",
                "Advanced Hair Design Mastery",
                "Bridal Styling Masterclasses",
                "Certification & Practice Kits"
            ]
        }
    ];

    return (
        <section id="services-section" className="w-full min-h-screen bg-[#FDFBF7] py-15 px-4 md:px-8 flex flex-col items-center">
            <img className="w-9 h-9 mr-2 mb-7" src={design} alt="" />
            {/* Header section with luxurious typography */}
            <div className="flex flex-col items-center mb-16 text-center">
                <span className="text-xs uppercase tracking-[0.25em] text-[#FF8A7A] font-bold mb-3">Premium Care</span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
                    Our Services
                </h2>
                <div className="mt-4 w-28 h-[3px] bg-gradient-to-r from-transparent via-[#FF8A7A] to-transparent"></div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-6xl w-full justify-items-center">
                {servicesList.map((service, index) => (
                    <Card
                        key={index}
                        title={service.title}
                        image={service.image}
                        description={service.description}
                        bullets={service.bullets}
                    />
                ))}
            </div>
        </section>
    );
};

export default Services;
