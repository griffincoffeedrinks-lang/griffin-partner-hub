export type PartnerEventType = "click" | "scan" | "share";

export type PartnerEvent = {
  id: string;
  partnerId: string;
  referralCode: string;
  type: PartnerEventType;
  timestamp: string;
};

const events: PartnerEvent[] = [];

export async function recordPartnerEvent({
  partnerId,
  referralCode,
  type,
}: {
  partnerId: string;
  referralCode: string;
  type: PartnerEventType;
}) {
  const event: PartnerEvent = {
    id: crypto.randomUUID(),
    partnerId,
    referralCode,
    type,
    timestamp: new Date().toISOString(),
  };

  events.push(event);

  console.log("GRIFFIN PARTNER EVENT", event);

  return event;
}

export function getPartnerEvents(partnerId: string) {
  return events.filter(
    (event) => event.partnerId === partnerId
  );
}

export function getPartnerStats(partnerId: string) {
  const partnerEvents = getPartnerEvents(partnerId);

  return {
    clicks: partnerEvents.filter(
      (event) => event.type === "click"
    ).length,

    scans: partnerEvents.filter(
      (event) => event.type === "scan"
    ).length,

    shares: partnerEvents.filter(
      (event) => event.type === "share"
    ).length,
  };
}