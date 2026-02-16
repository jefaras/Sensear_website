import type { Metadata } from 'next';
import Link from 'next/link';
import { Locale } from '@/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
    const { lang } = await params;
    
    const title = lang === 'el' 
        ? 'Πολιτική Απορρήτου | SensEar Music'
        : 'Privacy Policy | SensEar Music';
    
    const description = lang === 'el'
        ? 'Η πολιτική απορρήτου της SensEar Music. Μάθετε πώς συλλέγουμε, χρησιμοποιούμε και προστατεύουμε τα προσωπικά σας δεδομένα.'
        : 'SensEar Music privacy policy. Learn how we collect, use, and protect your personal data.';

    return {
        title,
        description,
        robots: {
            index: true,
            follow: true,
        },
    };
}

const content = {
    en: {
        title: 'Privacy Policy',
        lastUpdated: 'Last updated: February 2025',
        intro: 'At SensEar Music ("we," "our," or "us"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.',
        sections: [
            {
                title: '1. Information We Collect',
                content: `We may collect information about you in various ways. The information we may collect includes:

**Personal Data**
- Name and contact information (email address, phone number)
- Business information (company name, industry)
- Location data (country, city)

**Automatically Collected Information**
- IP address and browser type
- Device information and operating system
- Pages visited and time spent on our website
- Referring website addresses
- Interaction data with our services`
            },
            {
                title: '2. How We Use Your Information',
                content: `We use the information we collect for various purposes, including:

- Providing and maintaining our music curation services
- Communicating with you about our services, updates, and promotional offers
- Personalizing your experience and delivering content relevant to your interests
- Processing transactions and sending related information
- Responding to your comments, questions, and requests
- Monitoring and analyzing usage patterns to improve our website and services
- Detecting and preventing fraudulent transactions and abuse`
            },
            {
                title: '3. Disclosure of Your Information',
                content: `We may share your information in the following situations:

- **With Service Providers:** We may share your information with third-party vendors who perform services on our behalf, such as email delivery, hosting, and analytics.
- **For Legal Purposes:** We may disclose your information if required by law or in response to valid requests by public authorities.
- **Business Transfers:** In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
- **With Your Consent:** We may share your information for any other purpose with your consent.`
            },
            {
                title: '4. Data Security',
                content: `We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.`
            },
            {
                title: '5. Your Rights (GDPR)',
                content: `If you are a resident of the European Economic Area (EEA), you have certain data protection rights under the General Data Protection Regulation (GDPR). These include:

- **Right to Access:** You can request copies of your personal data.
- **Right to Rectification:** You can request correction of inaccurate data.
- **Right to Erasure:** You can request deletion of your personal data.
- **Right to Restrict Processing:** You can request limitation of how we use your data.
- **Right to Data Portability:** You can request transfer of your data to another service.
- **Right to Object:** You can object to our processing of your personal data.

To exercise these rights, please contact us at hello@sensear.music.`
            },
            {
                title: '6. Cookies and Tracking Technologies',
                content: `We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with small amounts of data which may include an anonymous unique identifier.

You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.`
            },
            {
                title: '7. Third-Party Links',
                content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these sites. We encourage you to read the privacy policies of any third-party sites you visit.`
            },
            {
                title: '8. Children\'s Privacy',
                content: `Our services are not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If we become aware that we have collected personal data from a child under 16, we will take steps to delete such information.`
            },
            {
                title: '9. Changes to This Privacy Policy',
                content: `We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.`
            },
            {
                title: '10. Contact Us',
                content: `If you have any questions about this Privacy Policy, please contact us using the information provided in the footer of our website.`
            }
        ]
    },
    el: {
        title: 'Πολιτική Απορρήτου',
        lastUpdated: 'Τελευταία ενημέρωση: Φεβρουάριος 2025',
        intro: 'Στην SensEar Music ("εμείς", "δικό μας" ή "εμάς"), δεσμευόμαστε να προστατεύουμε το απόρρητό σας. Αυτή η Πολιτική Απορρήτου εξηγεί πώς συλλέγουμε, χρησιμοποιούμε, αποκαλύπτουμε και προστατεύουμε τις πληροφορίες σας όταν επισκέπτεστε τον ιστότοπό μας ή χρησιμοποιείτε τις υπηρεσίες μας.',
        sections: [
            {
                title: '1. Πληροφορίες που Συλλέγουμε',
                content: `Μπορούμε να συλλέξουμε πληροφορίες για εσάς με διάφορους τρόπους. Οι πληροφορίες που μπορεί να συλλέξουμε περιλαμβάνουν:

**Προσωπικά Δεδομένα**
- Όνομα και στοιχεία επικοινωνίας (διεύθυνση email, αριθμός τηλεφώνου)
- Επιχειρηματικές πληροφορίες (όνομα εταιρείας, κλάδος)
- Δεδομένα τοποθεσίας (χώρα, πόλη)

**Αυτόματα Συλλεγόμενες Πληροφορίες**
- Διεύθυνση IP και τύπος περιηγητή
- Πληροφορίες συσκευής και λειτουργικό σύστημα
- Σελίδες που επισκέφθηκαν και χρόνος παραμονής στον ιστότοπό μας
- Διευθύνσεις ιστότοπων παραπομπής
- Δεδομένα αλληλεπίδρασης με τις υπηρεσίες μας`
            },
            {
                title: '2. Πώς Χρησιμοποιούμε τις Πληροφορίες σας',
                content: `Χρησιμοποιούμε τις πληροφορίες που συλλέγουμε για διάφορους σκοπούς, όπως:

- Παροχή και συντήρηση των υπηρεσιών μουσικής επιμέλειας
- Επικοινωνία μαζί σας για τις υπηρεσίες μας, ενημερώσεις και προσφορές
- Εξατομίκευση της εμπειρίας σας και παροχή περιεχομένου σχετικού με τα ενδιαφέροντά σας
- Επεξεργασία συναλλαγών και αποστολή σχετικών πληροφοριών
- Απάντηση στα σχόλια, τις ερωτήσεις και τα αιτήματά σας
- Παρακολούθηση και ανάλυση μοτίβων χρήσης για βελτίωση του ιστότοπου και των υπηρεσιών μας
- Ανίχνευση και αποτροπή δόλιων συναλλαγών και κατάχρησης`
            },
            {
                title: '3. Αποκάλυψη των Πληροφοριών σας',
                content: `Μπορούμε να μοιραστούμε τις πληροφορίες σας στις ακόλουθες περιπτώσεις:

- **Με Παρόχους Υπηρεσιών:** Μπορούμε να μοιραστούμε τις πληροφορίες σας με τρίτους παρόχους που εκτελούν υπηρεσίες εκ μέρους μας, όπως αποστολή email, φιλοξενία και αναλύσεις.
- **Για Νομικούς Σκοπούς:** Μπορούμε να αποκαλύψουμε τις πληροφορίες σας εάν απαιτείται από τον νόμο ή σε απάντηση σε έγκυρα αιτήματα από δημόσιες αρχές.
- **Επιχειρηματικές Μεταβιβάσεις:** Σε περίπτωση συγχώνευσης, εξαγοράς ή πώλησης περιουσιακών στοιχείων, οι πληροφορίες σας μπορεί να μεταφερθούν ως μέρος αυτής της συναλλαγής.
- **Με τη Συγκατάθεσή σας:** Μπορούμε να μοιραστούμε τις πληροφορίες σας για οποιονδήποτε άλλο σκοπό με τη συγκατάθεσή σας.`
            },
            {
                title: '4. Ασφάλεια Δεδομένων',
                content: `Εφαρμόζουμε κατάλληλα τεχνικά και οργανωτικά μέτρα ασφαλείας για την προστασία των προσωπικών σας πληροφοριών. Ωστόσο, καμία μέθοδος μετάδοσης μέσω Διαδικτύου ή ηλεκτρονικής αποθήκευσης δεν είναι 100% ασφαλής. Ενώ καταβάλλουμε κάθε προσπάθεια να χρησιμοποιούμε εμπορικά αποδεκτά μέσα για την προστασία των προσωπικών σας δεδομένων, δεν μπορούμε να εγγυηθούμε την απόλυτη ασφάλειά τους.`
            },
            {
                title: '5. Τα Δικαιώματά σας (GDPR)',
                content: `Εάν είστε κάτοικος του Ευρωπαϊκού Οικονομικού Χώρου (ΕΟΧ), έχετε συγκεκριμένα δικαιώματα προστασίας δεδομένων βάσει του Γενικού Κανονισμού Προστασίας Δεδομένων (GDPR). Αυτά περιλαμβάνουν:

- **Δικαίωμα Πρόσβασης:** Μπορείτε να ζητήσετε αντίγραφα των προσωπικών σας δεδομένων.
- **Δικαίωμα Διόρθωσης:** Μπορείτε να ζητήσετε διόρθωση ανακριβών δεδομένων.
- **Δικαίωμα Διαγραφής:** Μπορείτε να ζητήσετε διαγραφή των προσωπικών σας δεδομένων.
- **Δικαίωμα Περιορισμού Επεξεργασίας:** Μπορείτε να ζητήσετε περιορισμό του τρόπου χρήσης των δεδομένων σας.
- **Δικαίωμα Φορητότητας Δεδομένων:** Μπορείτε να ζητήσετε μεταφορά των δεδομένων σας σε άλλη υπηρεσία.
- **Δικαίωμα Αντίρρησης:** Μπορείτε να αντιταχθείτε στην επεξεργασία των προσωπικών σας δεδομένων.

Για να ασκήσετε αυτά τα δικαιώματα, επικοινωνήστε μαζί μας στο hello@sensear.music.`
            },
            {
                title: '6. Cookies και Τεχνολογίες Ιχνηλάτησης',
                content: `Χρησιμοποιούμε cookies και παρόμοιες τεχνολογίες ιχνηλάτησης για να παρακολουθούμε τη δραστηριότητα στον ιστότοπό μας και να διατηρούμε συγκεκριμένες πληροφορίες. Τα cookies είναι αρχεία με μικρές ποσότητες δεδομένων που μπορεί να περιλαμβάνουν έναν ανώνυμο μοναδικό αναγνωριστικό.

Μπορείτε να οδηγήσετε τον περιηγητή σας να αρνηθεί όλα τα cookies ή να υποδείξει πότε αποστέλλεται ένα cookie. Ωστόσο, εάν δεν αποδέχεστε cookies, ενδέχεται να μην μπορείτε να χρησιμοποιήσετε ορισμένα τμήματα του ιστότοπού μας.`
            },
            {
                title: '7. Σύνδεσμοι Τρίτων',
                content: `Ο ιστότοπός μας μπορεί να περιέχει συνδέσμους προς ιστότοπους τρίτων. Δεν ευθυνόμαστε για τις πρακτικές απορρήτου ή το περιεχόμενο αυτών των ιστότοπων. Σας ενθαρρύνουμε να διαβάσετε τις πολιτικές απορρήτου οποιωνδήποτε ιστότοπων τρίτων επισκέπτεστε.`
            },
            {
                title: '8. Απόρρητο Ανηλίκων',
                content: `Οι υπηρεσίες μας δεν προορίζονται για παιδιά κάτω των 16 ετών. Δεν συλλέγουμε εσκεμμένα προσωπικές πληροφορίες από παιδιά κάτω των 16 ετών. Εάν γίνει γνωστό ότι έχουμε συλλέξει προσωπικά δεδομένα από παιδί κάτω των 16 ετών, θα λάβουμε μέτρα για τη διαγραφή τέτοιων πληροφοριών.`
            },
            {
                title: '9. Αλλαγές σε αυτή την Πολιτική Απορρήτου',
                content: `Μπορούμε να ενημερώσουμε την Πολιτική Απορρήτου μας κατά καιρούς. Θα σας ειδοποιήσουμε για τυχόν αλλαγές δημοσιεύοντας τη νέα Πολιτική Απορρήτου σε αυτή τη σελίδα και ενημερώνοντας την ημερομηνία "Τελευταία ενημέρωση". Σας συμβουλεύουμε να ελέγχετε περιοδικά αυτή την Πολιτική Απορρήτου για τυχόν αλλαγές.`
            },
            {
                title: '10. Επικοινωνήστε μαζί μας',
                content: `Εάν έχετε οποιεσδήποτε ερωτήσεις σχετικά με αυτή την Πολιτική Απορρήτου, επικοινωνήστε μαζί μας χρησιμοποιώντας τα στοιχεία που παρέχονται στο υποσέλιδο του ιστότοπού μας.`
            }
        ]
    }
};

export default async function PrivacyPage({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params;
    const t = content[lang];

    return (
        <div className="bg-[#faebe3] min-h-screen pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
                <header className="mb-12">
                    <h1 className="text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] font-extrabold text-black leading-[1.1] tracking-tight mb-4">
                        {t.title}
                    </h1>
                    <p className="text-black/60 text-lg">{t.lastUpdated}</p>
                </header>

                {/* Introduction */}
                <div className="prose prose-lg max-w-none mb-12">
                    <p className="text-xl text-black/80 leading-relaxed">{t.intro}</p>
                </div>

                {/* Sections */}
                <div className="space-y-10">
                    {t.sections.map((section, index) => (
                        <section key={index} className="border-b border-black/10 pb-8 last:border-0">
                            <h2 className="text-2xl font-bold text-black mb-4">{section.title}</h2>
                            <div className="prose prose-lg max-w-none text-black/80">
                                {section.content.split('\n\n').map((paragraph, pIndex) => (
                                    <p key={pIndex} className="mb-4 whitespace-pre-line">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                {/* Back Link */}
                <div className="mt-16 pt-8 border-t border-black/10">
                    <Link 
                        href={`/${lang}`}
                        className="text-black/60 hover:text-black transition-colors inline-flex items-center gap-2"
                    >
                        ← {lang === 'el' ? 'Επιστροφή στην αρχική' : 'Back to home'}
                    </Link>
                </div>
            </div>
        </div>
    );
}
