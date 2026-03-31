# Read all 4 files
$batch1 = Get-Content "city-content-batch1.ts" -Raw
$batch2 = Get-Content "city-content-batch2.ts" -Raw
$batch3 = Get-Content "city-content-batch3.ts" -Raw

# Extract just the object content from each batch (remove export const xxx = )
$batch1Obj = $batch1 -replace "export const batch1Content: Record<string,.*?> = ", ""
$batch2Obj = $batch2 -replace "export const batch2Content: Record<string,.*?> = ", ""
$batch3Obj = $batch3 -replace "export const batch3Content: Record<string,.*?> = ", ""

# Get original and remove default
$original = Get-Content "src/data/cityContent.ts" -Raw
$originalObj = $original -replace "export const cityContent: Record<string,.*?> = ", "" -replace ",?\s*// Default content for other cities[\s\S]*?'default':.*?\]?\s*\};", ""

# Remove trailing }; and whitespace
$originalObj = $originalObj.Trim().TrimEnd(';').TrimEnd('}').Trim()

# Build the merged content
$output = @"
export const cityContent: Record<string, { neighborhoods: string[]; landmarks: string; climate: string; faqs: { question: string; answer: string }[] }> = {
$originalObj,
$batch1Obj,
$batch2Obj,
$batch3Obj,
  'default': {
    neighborhoods: ['Downtown', 'Historic District', 'Residential Areas'],
    landmarks: 'Local landmarks and attractions',
    climate: 'Varied climate with seasonal weather patterns. Regular maintenance can prevent most water damage.',
    faqs: [
      { question: 'Do you service this area?', answer: 'Yes! We provide complete water damage restoration services throughout this region.' },
      { question: 'What causes water damage in this area?', answer: 'Common causes include burst pipes, appliance failures, roof leaks, and severe weather events.' },
      { question: 'How quickly can you respond?', answer: 'We typically arrive within 2-4 hours of your call, depending on location and availability.' },
      { question: 'Do you work with insurance companies?', answer: 'Yes, we work directly with all major insurance carriers and can help verify your coverage.' },
      { question: 'Can you handle mold remediation?', answer: 'Yes, we provide comprehensive mold remediation services as part of our restoration process.' }
    ]
  }
};

export function getCityContent(slug: string) {
  return cityContent[slug] || cityContent['default'];
}
"@

$output | Set-Content "src/data/cityContent.ts" -NoNewline
Write-Host "File written"