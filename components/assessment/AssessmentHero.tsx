"use client";

import { useSearchParams } from "next/navigation";

import { campaignMessages, getCampaignAngle } from "@/components/assessment/assessment-campaign";
import { AssessmentHeroView } from "@/components/assessment/AssessmentHeroView";

export function AssessmentHero() {
    const searchParams = useSearchParams();
    return <AssessmentHeroView message={campaignMessages[getCampaignAngle(searchParams.get("angle"))]} />;
}
