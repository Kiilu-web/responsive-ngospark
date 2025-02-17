
const Campaigns = () => {
  return (
    <div className="pt-16">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Active Campaigns</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our ongoing initiatives to make a difference in communities
              worldwide.
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                title: "Education for All",
                description:
                  "Help us build schools and provide educational resources to children in need. Your support can transform lives through education.",
                image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
                goal: "1,000,000",
                raised: "750,000",
                daysLeft: 45,
              },
              {
                title: "Clean Water Access",
                description:
                  "Support our mission to provide clean water access to rural communities. Together, we can improve health and sanitation.",
                image: "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1",
                goal: "500,000",
                raised: "320,000",
                daysLeft: 30,
              },
              {
                title: "Healthcare Initiative",
                description:
                  "Help us bring medical care to underserved areas through mobile clinics and healthcare facilities.",
                image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
                goal: "750,000",
                raised: "425,000",
                daysLeft: 60,
              },
            ].map((campaign, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="h-full">
                    <img
                      src={campaign.image}
                      alt={campaign.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      {campaign.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{campaign.description}</p>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                          <span>Raised: ${campaign.raised}</span>
                          <span>Goal: ${campaign.goal}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{
                              width: `${(parseInt(campaign.raised.replace(/,/g, "")) /
                                parseInt(campaign.goal.replace(/,/g, ""))) *
                                100}%`,
                            }}
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">
                          {campaign.daysLeft} days left
                        </span>
                        <button className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                          Donate Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Campaigns;
