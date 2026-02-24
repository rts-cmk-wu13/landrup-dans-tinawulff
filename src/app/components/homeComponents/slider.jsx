
import { getTestimonials } from "../../lib/dal";

export default async function Slider() {

    const testimonials = await getTestimonials();


    return (
        <section>
            <h2>Det siger vores kunder om os</h2>
        </section>
    )

}