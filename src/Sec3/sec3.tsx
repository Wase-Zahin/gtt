import React from 'react';

const specialties = [
    {title: 'Orthopedics', description: 'Specialized care for bone, joint, and muscle disorders.'},
    {title: 'Cardiology', description: 'Comprehensive heart care and cardiovascular treatments.'},
    {title: 'Gastroenterology', description: 'Diagnosis and treatment of digestive system disorders.'},
    {title: 'Dermatology', description: 'Expert care for skin, hair, and nail conditions.'},
    {title: 'Pediatrics', description: 'Healthcare for infants, children, and adolescents.'},
    {title: 'Neurology', description: 'Treatment of brain, spine, and nervous system disorders.'}
];

const Sec3: React.FC = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-8">Multi-Specialty Focus</h2>
                <p className="text-lg text-gray-600 mb-12">Providing specialized care across a wide range of medical
                    disciplines.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                    {specialties.map((specialty, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold text-gray-700 mb-4">{specialty.title}</h3>
                                    <p className="text-gray-600">{specialty.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sec3;