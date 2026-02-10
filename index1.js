(() => {
  const PASSWORD = 'makoto';
  const redirectUrl =
    'aaaaaaaaaaaaaa';

  const input = document.getElementById('pw');
  const msg = document.getElementById('msg');
  const btn = document.getElementById('submitBtn');

  function showMessage(text, ok = false){
    msg.textContent = text;
    msg.style.color = ok ? '#16a34a' : 'var(--danger)';
  }

  function wrong(){
    showMessage('パスワードが違います');
    input.classList.remove('shake');
    void input.offsetWidth; // 再描画トリガー
    input.classList.add('shake');
    input.value = '';
    input.focus();
  }

  function correct(){
    showMessage('認証に成功しました。移動します…', true);
    setTimeout(() => {
      location.href = redirectUrl;
    }, 500);
  }

  function tryPassword(){
    const val = input.value.trim();
    if(!val){
      showMessage('パスワードを入力してください');
      return;
    }
    val === PASSWORD ? correct() : wrong();
  }

  btn.addEventListener('click', tryPassword);
  input.addEventListener('keydown', e => {
    if(e.key === 'Enter') tryPassword();
  });

  input.focus();
})();
