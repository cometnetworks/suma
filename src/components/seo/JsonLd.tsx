export function JsonLd({ data }: { data: any }) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

export const ORGANIZATION_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SUMA Hospitalario",
    url: "https://sumahospitalario.mx",
    logo: "https://sumahospitalario.mx/logo.png",
    contactPoint: {
        "@type": "ContactPoint",
        telephone: "+52-55-1234-5678",
        contactType: "customer service",
        areaServed: "MX",
        availableLanguage: "Spanish",
    },
    sameAs: [
        "https://facebook.com/sumahospitalario",
        "https://linkedin.com/company/sumahospitalario",
    ],
};
