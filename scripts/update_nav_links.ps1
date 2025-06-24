# Updates navigation and CTA links from anchor hashes to real page links across all docs/*.html files
$ErrorActionPreference = 'Stop'

$docsDir = Join-Path $PSScriptRoot '..\docs' | Resolve-Path | Select-Object -ExpandProperty Path

$mapping = @{
    '#home'          = 'index.html'
    '#programs'      = 'programs.html'
    '#our-impact'    = 'impact.html'
    '#about-us'      = 'about-us.html'
    '#get-involved'  = 'get-involved.html'
}

Get-ChildItem -Path $docsDir -Filter '*.html' | ForEach-Object {
    $path = $_.FullName
    $content = Get-Content $path -Raw

    foreach ($hash in $mapping.Keys) {
        $new = $mapping[$hash]
        # replace href="#{hash}" with href="{file}"
        $pattern = "href=`"$([regex]::Escape($hash))`""
        $replace = "href=`"$new`""
        $content = [regex]::Replace($content, $pattern, $replace)
    }

    # Update the logo link href="#" -> index.html
    $content = $content -replace 'href="#" class="text-white', 'href="index.html" class="text-white'

    Set-Content -Path $path -Value $content -Encoding UTF8
}

Write-Host "Navigation links updated in HTML pages."
