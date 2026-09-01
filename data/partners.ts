export type Partner = {
  id: string;
  slug: string;
  name: string;
  referralCode: string;
};

export const partners: Partner[] = [
  {
    id: "don-drew",
    slug: "don-drew",
    name: "Don Drew",
    referralCode: "GC2501",
  },
];

export function getPartnerByReferralCode(
  referralCode: string
): Partner | undefined {
  return partners.find(
    (partner) =>
      partner.referralCode.toUpperCase() ===
      referralCode.toUpperCase()
  );
}

export function getPartnerBySlug(
  slug: string
): Partner | undefined {
  return partners.find(
    (partner) => partner.slug === slug
  );
}