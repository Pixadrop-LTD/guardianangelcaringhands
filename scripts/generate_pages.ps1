# Generates placeholder pages based on docs/index.html template
$ErrorActionPreference = 'Stop'

$docs = Join-Path $PSScriptRoot '..\docs' | Resolve-Path | Select-Object -ExpandProperty Path

$templatePath = Join-Path $docs 'index.html'
if (-Not (Test-Path $templatePath)) {
    Write-Error "Template $templatePath not found"
    exit 1
}

$template = Get-Content $templatePath -Raw

# Remove the hero section only – keep header, decorative blobs, and footer
# Build replacement string separately to avoid quoting issues
$replacement = "<!-- Page Content Placeholder -->"

$cleanTemplate = [regex]::Replace(
    $template,
    '(?s)<section id="home".*?</section>',
    $replacement
)

$pages = @(
    'about-us',
    'programs',
    'impact',
    'donate',
    'contact',
    'get-involved',
    'volunteer',
    'sponsor',
    'in-kind-donations',
    'advocacy',
    'partnerships',
    'legacy-giving',
    'visits',
    'blog',
    'faq',
    'privacy-policy',
    'terms-of-service',
    'cookie-policy'
)

foreach ($page in $pages) {
    $outPath = Join-Path $docs ("$page.html")
    Set-Content -Path $outPath -Value $cleanTemplate -Encoding UTF8
}

Write-Host "Generated $($pages.Count) pages in $docs"
