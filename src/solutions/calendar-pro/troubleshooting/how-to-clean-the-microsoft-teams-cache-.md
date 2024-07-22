# How to clean the Microsoft Teams cache?

<h2 id="h_b0ec7c195b">Clear Teams cache in Windows</h2>
<ol>
<li>
<p class="no-margin">If Teams is still running, right-click the Teams icon in the taskbar, and then select <b>Quit</b>.</p>
</li>
<li>
<p class="no-margin">Open the <b>Run</b> dialog box by pressing the Windows logo key</p>
<div class="intercom-container"><img src="/assets/img/teams-pro/image_113.png"></div>
<p class="no-margin">+R.</p>
</li>
<li>
<p class="no-margin">In the <b>Run</b> dialog box, enter <i>%appdata%\Microsoft\Teams</i>, and then select <b>OK</b>.</p>
</li>
<li>
<p class="no-margin">Delete all files and folders in the %appdata%\Microsoft\Teams directory.</p>
</li>
<li>
<p class="no-margin">Restart Teams.</p>
</li>
</ol><p class="no-margin"></p>
<h2 id="h_7f022882fa">Clear Teams cache in macOS</h2>
<ol>
<li>
<p class="no-margin">If Teams is still running, right-click the Teams icon in the dock, and then select <b>Quit</b>, or press Command (⌘)-Q.</p>
</li>
<li>
<p class="no-margin">In the <b>Finder</b>, open the /Applications/Utilities folder, and then double-click <b>Terminal</b>.</p>
</li>
<li>
<p class="no-margin">Enter the following command, and then press Return:</p>
<p class="no-margin"></p>
<p class="no-margin">Console</p>
</li>
</ol><ol>
<li>
<pre><code>rm -r ~/Library/Application\ Support/Microsoft/Teams</code></pre>
</li>
<li>
<p class="no-margin">Restart Teams.</p>
</li>
</ol>




<Intercom />
<Clarity />
<GoogleAnalytics />