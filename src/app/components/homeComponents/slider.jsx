
import { getTestimonials } from "../../lib/dal";

export default async function Slider() {

    const testimonials = await getTestimonials();


    return (
        <section className="bg-blue-950 flex flex-col items-center py-12">
            <h2 className="mx-6 text-3xl w-[60%] text-center font-[500] mb-6">Det siger vores kunder om os</h2>

                <p className="mx-6 text-m w-[60%] text-center font-[500] mb-4">{testimonials[0].content}</p>
                <p className="mx-6 text-xl w-[60%] text-center font-[700]">{testimonials[0].name}</p>
                <p className="mx-6 text-xs w-[60%] text-center font-[500] mb-4">{testimonials[0].occupation}</p>
        </section>
    )

}