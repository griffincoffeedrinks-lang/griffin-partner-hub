import { NextRequest, NextResponse } from "next/server";
import { getPartnerByReferralCode } from "@/data/partners";
import { recordPartnerEvent } from "@/lib/tracking";

export async function GET(
  request: NextRequest,
  {
    params,
  }: {
    params: Promise<{ code: string }>;
  }
) {
  const { code } = await params;

  const referralCode = code.toUpperCase();

  const partner = getPartnerByReferralCode(referralCode);

  /*
   * If the referral code doesn't exist,
   * send the visitor directly to the
   * customer experience.
   */
  if (!partner) {
    return NextResponse.redirect(
      new URL("/experience", request.url)
    );
  }

  /*
   * Determine how the partner link was used.
   *
   * /r/GC2501
   *             = click
   *
   * /r/GC2501?source=scan
   *             = scan
   *
   * /r/GC2501?source=share
   *             = share
   */
  const source =
    request.nextUrl.searchParams.get("source");

  let eventType: "click" | "scan" | "share" =
    "click";

  if (source === "scan") {
    eventType = "scan";
  }

  if (source === "share") {
    eventType = "share";
  }

  await recordPartnerEvent({
    partnerId: partner.id,
    referralCode: partner.referralCode,
    type: eventType,
  });

  /*
   * IMPORTANT:
   *
   * Nothing gets appended to the final
   * CoffeeStore URL.
   *
   * We record the event HERE first,
   * then send the customer to our
   * customer experience page.
   */
  return NextResponse.redirect(
    new URL("/experience", request.url)
  );
}