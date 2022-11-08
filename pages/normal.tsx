export default function NormalPage() {
  return 

<p>I'm just a normal old page, no AMP for me</p>
<div>
      <amp-script layout="fixed-height" height="36" script="user-agent-script" class="sample">
        <div>
          Your operating system is:
          <span id="operating-system" class="answer-text"></span>
        </div>
      </amp-script>

      <script id="user-agent-script" type="text/plain" target="amp-script">
        // Adapted with gratitude from https://stackoverflow.com/a/38241481

        function getOS() {
          const userAgent = navigator.userAgent,
                platform = navigator.platform,
                macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
                windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
                iosPlatforms = ['iPhone', 'iPad', 'iPod'];

          if (macosPlatforms.includes(platform)) {
            return 'Mac OS';
          } else if (iosPlatforms.includes(platform)) {
            return 'iOS';
          } else if (windowsPlatforms.includes(platform)) {
            return 'Windows';
          } else if (/Android/.test(userAgent)) {
            return 'Android';
          } else if (/Linux/.test(platform)) {
            return 'Linux';
          }

          return 'Unknown';
        }

        const span = document.getElementById('operating-system');
        span.textContent = getOS();
      </script>
    </div>



}
