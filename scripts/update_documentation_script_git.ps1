param (
    [Parameter(Mandatory=$true)]
    [string]$FilePath,
    [Parameter(Mandatory=$true)]
    [string]$MarkdownData
)

$title = "## What's new on GPTPro ?"

$contentToWrite = "$title`r`n$MarkdownData"

$contentToWrite | Set-Content -Path $FilePath -Force

Write-Output "Markdown data has been written to $FilePath"