Form, Input ve labellar doğru şekilde render ediliyor mu ?
İsim inputu ve email inputundaki hata mesajları düzgün çalışıyor mu ?
Submit butonunda reset özelliği ve disable özelliği istenilen şekilde çalışıyor mu ?
Gönderilen içerik düzgün render ediliyor mu ?

- [ ] iletişim formu hatasız yükleniyorsa.
- [ ] başlıkta h1 elemanı bulunuyorsa. 2 tane assert ekleyin, eğer header dökümanda bulunuyorsa, başlık doğru test içeriğine sahipse.
- [ ] kullanıcı Ad bölümüne 5 karakterden az bir şey yazarsa bileşen `1` hata mesajı içeriyorsa. async/await ve state değişimini gözlemlemek için doğru girdileri kullandığınıza emin olun.
- [ ] kullanıcı hiçbir inputu doldurmadıysa ÜÇ hata mesajı render edildiğinde.
- [ ] kullanıcı email bölümünü doldurmadığında bileşen BİR hata mesajı render ettiğinde.
- [ ] eğer kullanıcı geçersiz bir mail girerse _"email geçerli bir email adresi olmalıdır."_ hata mesajı render edildiğinde.
- [ ] form soyad girilmeden gönderilirse _"soyad gereklidir."_ hata mesajı render edildiğinde.
- [ ] mesaj inputu girilmediğinde ama ad,soyad ve email geçerli değerlerle form gönderildiğinde hata mesajı gösterilmiyorsa.
- [ ] kullanıcı tüm inputları geçerli bir şekilde doldurup gönderdiğinde tüm değerler görüntüleniyor.
