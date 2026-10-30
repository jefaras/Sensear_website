export const campaignMessages = {
    music: {
        lead: "Στον χώρο σας παίζει ήδη μουσική,",
        emphasis: "αλλά είναι η σωστή;",
        supporting: "Δείτε καθαρά τι λειτουργεί, τι όχι και πώς ο χώρος σας μπορεί να αποκτήσει έναν πιο ξεχωριστό και αναγνωρίσιμο ήχο.",
    },
    shift: {
        lead: "Κάθε φορά που αλλάζει η βάρδια,",
        emphasis: "μήπως αλλάζει και η μουσική;",
        supporting: "Δείτε πώς η μουσική μπορεί να ακολουθεί τη μέρα, χωρίς να εξαρτάται από τη βάρδια.",
    },
    daypart: {
        lead: "Η μουσική στον χώρο σας είναι ίδια",
        emphasis: "πρωί, μεσημέρι και βράδυ;",
        supporting: "Δείτε πώς ο ήχος μπορεί να αλλάζει με τη μέρα, χωρίς να χάνει τον χαρακτήρα του χώρου.",
    },
} as const;

export type CampaignAngle = keyof typeof campaignMessages;
export type CampaignMessage = (typeof campaignMessages)[CampaignAngle];

export function getCampaignAngle(value: string | null): CampaignAngle {
    return value === "shift" || value === "daypart" ? value : "music";
}
