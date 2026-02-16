# Services Page: Secondary Layout Alternatives

## Context

The "Signature Playlists" and "Event Soundtracks" sections are the **primary** services with:
- Large titles: `text-[2.7rem] md:text-[48px]`
- Large subtitles: `text-xl`
- Large descriptions: `text-lg md:text-xl`
- Large CTA buttons: `px-8 py-6 text-lg`
- Full-width images with `w-full`
- Generous spacing: `mb-24`, `gap-12`

The "Sonic Strategy" and "Audio Upgrades" sections should appear **secondary** through:
- Smaller text sizes
- More compact spacing
- Muted styling
- Smaller images

---

## Alternative 1: Compact Side-by-Side Cards

A card-based layout with reduced scale and muted borders. Each service is contained in a subtle card with the image on top and content below.

### Visual Hierarchy Techniques
- Smaller titles: `text-2xl` (vs `text-[2.7rem]`)
- Smaller subtitles: `text-base` (vs `text-xl`)
- Smaller descriptions: `text-sm` (vs `text-lg`)
- Smaller CTA: `px-5 py-3 text-sm` (vs `px-8 py-6 text-lg`)
- Muted border: `border-black/20`
- Compact spacing: `gap-6` (vs `gap-12`)

### Tailwind CSS Code

```tsx
{/* Alternative 1: Compact Side-by-Side Cards */}
<div className="grid md:grid-cols-2 gap-6 lg:gap-8">
    {/* Sonic Strategy Card */}
    <div className="bg-white/50 border border-black/10 rounded-2xl p-6 lg:p-8">
        <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/d2c616905_fd3f4ff86f1dfed345baa64ee2908eda.jpg"
            alt="Sonic Strategy"
            className="w-full h-48 lg:h-56 object-cover rounded-xl mb-6"
        />
        <h3 className="text-2xl font-bold text-black leading-tight mb-1">
            {content.services.strategy.title}
        </h3>
        <p className="text-base font-medium text-black/50 mb-4">{content.services.strategy.subtitle}</p>
        <p className="text-sm text-black/60 leading-relaxed mb-4">{content.services.strategy.desc}</p>
        <p className="text-sm text-black/50 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: content.services.strategy.ideal_for }} />
        <Link href={`/${lang}/contact?interest=sonic-strategy`}>
            <Button
                variant="outline"
                className="group w-full bg-transparent border border-black/30 text-black hover:bg-black hover:text-white px-5 py-3 text-sm font-medium rounded-full transition-all duration-300"
            >
                <span className="mr-2">{content.services.strategy.cta}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
        </Link>
    </div>

    {/* Audio Upgrades Card */}
    <div className="bg-white/50 border border-black/10 rounded-2xl p-6 lg:p-8">
        <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/bbe747c8e_57b86e08a_b6e0a3f63_tech_hifi_1979_07-pxbee-cropped2.jpg"
            alt="Audio Upgrades"
            className="w-full h-48 lg:h-56 object-cover rounded-xl mb-6"
        />
        <h3 className="text-2xl font-bold text-black leading-tight mb-1">
            {content.services.upgrades.title}
        </h3>
        <p className="text-base font-medium text-black/50 mb-4">{content.services.upgrades.subtitle}</p>
        <p className="text-sm text-black/60 leading-relaxed mb-4">{content.services.upgrades.desc}</p>
        <p className="text-sm text-black/50 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: content.services.upgrades.ideal_for }} />
        <Link href={`/${lang}/contact?interest=audio-upgrades`}>
            <Button
                variant="outline"
                className="group w-full bg-transparent border border-black/30 text-black hover:bg-black hover:text-white px-5 py-3 text-sm font-medium rounded-full transition-all duration-300"
            >
                <span className="mr-2">{content.services.upgrades.cta}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
        </Link>
    </div>
</div>
```

### Responsive Behavior
- **Mobile (<768px):** Cards stack vertically, full width
- **Tablet/Desktop (≥768px):** Cards side-by-side
- **Images:** Fixed height (`h-48 lg:h-56`), no overflow

---

## Alternative 2: Horizontal Compact Rows

A horizontal layout with small images on the left and compact content on the right. Similar to a list view.

### Visual Hierarchy Techniques
- Smaller titles: `text-xl lg:text-2xl`
- Smaller subtitles: `text-sm lg:text-base`
- Smaller descriptions: `text-sm`
- Smaller CTA: `px-4 py-2 text-sm`
- Compact images: `w-24 h-24 lg:w-32 lg:h-32`
- Muted separator: `border-b border-black/10`

### Tailwind CSS Code

```tsx
{/* Alternative 2: Horizontal Compact Rows */}
<div className="space-y-0 divide-y divide-black/10">
    {/* Sonic Strategy Row */}
    <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 py-6 lg:py-8">
        <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/d2c616905_fd3f4ff86f1dfed345baa64ee2908eda.jpg"
            alt="Sonic Strategy"
            className="w-full sm:w-24 h-32 sm:h-24 lg:w-32 lg:h-32 object-cover rounded-xl flex-shrink-0"
        />
        <div className="flex-1">
            <h3 className="text-xl lg:text-2xl font-bold text-black leading-tight mb-1">
                {content.services.strategy.title}
            </h3>
            <p className="text-sm lg:text-base font-medium text-black/50 mb-2">{content.services.strategy.subtitle}</p>
            <p className="text-sm text-black/60 leading-relaxed mb-3 hidden sm:block">{content.services.strategy.desc}</p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <p className="text-sm text-black/50 leading-relaxed sm:flex-1" dangerouslySetInnerHTML={{ __html: content.services.strategy.ideal_for }} />
                <Link href={`/${lang}/contact?interest=sonic-strategy`} className="flex-shrink-0">
                    <Button
                        variant="outline"
                        className="group bg-transparent border border-black/30 text-black hover:bg-black hover:text-white px-4 py-2 text-sm font-medium rounded-full transition-all duration-300"
                    >
                        <span className="mr-1">{content.services.strategy.cta}</span>
                        <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                </Link>
            </div>
        </div>
    </div>

    {/* Audio Upgrades Row */}
    <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 py-6 lg:py-8">
        <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/bbe747c8e_57b86e08a_b6e0a3f63_tech_hifi_1979_07-pxbee-cropped2.jpg"
            alt="Audio Upgrades"
            className="w-full sm:w-24 h-32 sm:h-24 lg:w-32 lg:h-32 object-cover rounded-xl flex-shrink-0"
        />
        <div className="flex-1">
            <h3 className="text-xl lg:text-2xl font-bold text-black leading-tight mb-1">
                {content.services.upgrades.title}
            </h3>
            <p className="text-sm lg:text-base font-medium text-black/50 mb-2">{content.services.upgrades.subtitle}</p>
            <p className="text-sm text-black/60 leading-relaxed mb-3 hidden sm:block">{content.services.upgrades.desc}</p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <p className="text-sm text-black/50 leading-relaxed sm:flex-1" dangerouslySetInnerHTML={{ __html: content.services.upgrades.ideal_for }} />
                <Link href={`/${lang}/contact?interest=audio-upgrades`} className="flex-shrink-0">
                    <Button
                        variant="outline"
                        className="group bg-transparent border border-black/30 text-black hover:bg-black hover:text-white px-4 py-2 text-sm font-medium rounded-full transition-all duration-300"
                    >
                        <span className="mr-1">{content.services.upgrades.cta}</span>
                        <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                </Link>
            </div>
        </div>
    </div>
</div>
```

### Responsive Behavior
- **Mobile (<640px):** Image on top, content below, description hidden
- **Tablet/Desktop (≥640px):** Image on left, content on right
- **Images:** Fixed dimensions with responsive sizes, no overflow

---

## Alternative 3: Muted Background Grid

A two-column grid with a subtle background color and reduced visual weight.

### Visual Hierarchy Techniques
- Muted background: `bg-black/5`
- Smaller titles: `text-xl lg:text-2xl`
- Smaller subtitles: `text-sm text-black/50`
- Smaller descriptions: `text-sm text-black/60`
- Smaller CTA: `text-sm font-medium`
- Rounded container: `rounded-2xl`
- Compact padding: `p-6 lg:p-8`

### Tailwind CSS Code

```tsx
{/* Alternative 3: Muted Background Grid */}
<div className="bg-black/5 rounded-2xl p-6 lg:p-8">
    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {/* Sonic Strategy */}
        <div className="flex flex-col">
            <div className="flex items-start gap-4 mb-4">
                <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/d2c616905_fd3f4ff86f1dfed345baa64ee2908eda.jpg"
                    alt="Sonic Strategy"
                    className="w-20 h-20 lg:w-24 lg:h-24 object-cover rounded-xl flex-shrink-0"
                />
                <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-black leading-tight mb-1">
                        {content.services.strategy.title}
                    </h3>
                    <p className="text-sm text-black/50">{content.services.strategy.subtitle}</p>
                </div>
            </div>
            <p className="text-sm text-black/60 leading-relaxed mb-3">{content.services.strategy.desc}</p>
            <p className="text-sm text-black/50 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: content.services.strategy.ideal_for }} />
            <Link href={`/${lang}/contact?interest=sonic-strategy`} className="mt-auto">
                <Button
                    variant="outline"
                    className="group bg-transparent border border-black/30 text-black hover:bg-black hover:text-white px-4 py-2 text-sm font-medium rounded-full transition-all duration-300"
                >
                    <span className="mr-1">{content.services.strategy.cta}</span>
                    <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
            </Link>
        </div>

        {/* Audio Upgrades */}
        <div className="flex flex-col">
            <div className="flex items-start gap-4 mb-4">
                <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/bbe747c8e_57b86e08a_b6e0a3f63_tech_hifi_1979_07-pxbee-cropped2.jpg"
                    alt="Audio Upgrades"
                    className="w-20 h-20 lg:w-24 lg:h-24 object-cover rounded-xl flex-shrink-0"
                />
                <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-black leading-tight mb-1">
                        {content.services.upgrades.title}
                    </h3>
                    <p className="text-sm text-black/50">{content.services.upgrades.subtitle}</p>
                </div>
            </div>
            <p className="text-sm text-black/60 leading-relaxed mb-3">{content.services.upgrades.desc}</p>
            <p className="text-sm text-black/50 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: content.services.upgrades.ideal_for }} />
            <Link href={`/${lang}/contact?interest=audio-upgrades`} className="mt-auto">
                <Button
                    variant="outline"
                    className="group bg-transparent border border-black/30 text-black hover:bg-black hover:text-white px-4 py-2 text-sm font-medium rounded-full transition-all duration-300"
                >
                    <span className="mr-1">{content.services.upgrades.cta}</span>
                    <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
            </Link>
        </div>
    </div>
</div>
```

### Responsive Behavior
- **Mobile (<768px):** Cards stack vertically
- **Tablet/Desktop (≥768px):** Cards side-by-side
- **Images:** Small thumbnails (`w-20 h-20 lg:w-24 lg:h-24`), no overflow

---

## Comparison Table

| Feature | Primary Sections | Alt 1: Cards | Alt 2: Rows | Alt 3: Grid |
|---------|-----------------|--------------|-------------|-------------|
| Title Size | `text-[2.7rem]` | `text-2xl` | `text-xl lg:text-2xl` | `text-xl lg:text-2xl` |
| Subtitle Size | `text-xl` | `text-base` | `text-sm lg:text-base` | `text-sm` |
| Description Size | `text-lg md:text-xl` | `text-sm` | `text-sm` | `text-sm` |
| CTA Size | `px-8 py-6 text-lg` | `px-5 py-3 text-sm` | `px-4 py-2 text-sm` | `px-4 py-2 text-sm` |
| Image Size | Full width | `h-48 lg:h-56` | `w-24 h-24 lg:w-32 lg:h-32` | `w-20 h-20 lg:w-24 lg:h-24` |
| Spacing | `gap-12`, `mb-24` | `gap-6`, `p-6 lg:p-8` | `gap-4 lg:gap-6`, `py-6 lg:py-8` | `gap-6 lg:gap-8`, `p-6 lg:p-8` |
| Border Style | None | `border-black/10` | `divide-black/10` | `bg-black/5` |
| Responsive Breakpoint | `lg:grid-cols-2` | `md:grid-cols-2` | `sm:flex-row` | `md:grid-cols-2` |

---

## Recommendation

**Alternative 3: Muted Background Grid** is recommended because:

1. **Clear visual hierarchy:** The muted background (`bg-black/5`) clearly distinguishes these sections as secondary
2. **Fully responsive:** No fixed dimensions that could cause overflow
3. **Compact but readable:** Small thumbnails keep the layout clean while maintaining visual interest
4. **Consistent with design system:** Uses the same rounded corners and border styles as other elements
5. **Easy to implement:** Simple grid layout with no complex ordering
