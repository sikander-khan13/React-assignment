const Features = () => (
  <div className="bg-[#002228] text-white py-16 px-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          image: "Vector.png",
          title: "You’re in Control",
          description:
            "aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.",
        },
        {
          image: "Vect.png",
          title: "Infinitely Scalable",
          description:
            "Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.",
        },
        {
          image: "Vecor.png",
          title: "Incredibly Flexible",
          description:"Train an aiDR on an outbound patch or to reach out to your long tail of SMB customers.",
        },
      ].map((feature, index) => (
        <div key={index}>
          <img src={feature.image} alt="" />
          <h3 className="text-teal-400 font-semibold text-xl mt-4">
            {feature.title}
          </h3>
          <p className="text-gray-400 mt-4">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Features;