# !!!!!!!!!! აპლიკაციაში რომ შეხვიდეთ უნდა გამომიგზავნოთ თქვენი იმეილი რომლითაც დარეგისტრირებული ხართ Spotify-ზე, რათა Spotify Developer Dashboard-ზე დაგამატოთ დეველოპერად. წინააღმდეგ შემთხვევში საიტზე შეხვალთ, მაგრამ ინფორმაციას ვერ დაფეტჩავს. ეს რომ ასე არ მოხდეს მაშინ Spotify-ს უნდა გავუგზავნო მოთხოვნა რომ ჩემს საიტზე შეეძლოთ შემოვიდნენ როგორც იუზერები რის დადასტურებას დრო სჭირდება, და რადგან ფინალურზე დედლაინი გვაქვს ვერ მოესწრება. ამიტომ გთხოვთ სანამ საიტზე შეხვალთ თქვენი იმეილი გამომიგზავნოთ რომლითაც დარეგისტრირებული ხართ Spotify-ზე !!!!!!!!!!

აპლიკაცია გვეხმარება Spotify API-ს გამოყენებით ვნახოთ ჩვენს მიერ ყველაზე მეტად მოსმენადი ტოპ 10 არტისტი, ტოპ 10 სიმღერა და ასევე ვნახოთ თუ რომელი 10 ალბუმი არის მეტად პოპულარული.
![image](https://github.com/user-attachments/assets/c373d6ff-7b78-41b8-94ba-bc63a2a9ef3a)    ![image](https://github.com/user-attachments/assets/a8dce05f-751f-4e52-b478-d66d48fe2cd2)     ![image](https://github.com/user-attachments/assets/8549d681-251d-461b-aa94-06c68dabc1c8)
# Dark Mode: ![image](https://github.com/user-attachments/assets/844726dd-3d49-412c-8d13-7db2203a505d)



ავთენთიფიკაციისთვის გამოვიყენე Spotify OAuth (რის გამოც ვერ გამოვიყენე github pages ამიტომ Vercel-ზე დავჰოსთე).
![image](https://github.com/user-attachments/assets/749b91eb-c998-47ce-bac6-29791c79a05e)
შექმნილი მაქვს useSpotify.js hook რომლის მეშვეობითაც ხდება ავთენთიფიკაციის პროცესი. როდესაც Spotify გადმოამისამართებს იოუზერს ავტორიზაციის გავლის შემდეგ, URL-დან ვიღებთ ტოკენს რომელსაც ვინახავთ local storage-ში
თუ იუზერი უკვე შესულია ტოკენი სთორიჯიდან მოაქვს რათა აღარ დაჭირდეს თავიდან ავთენთიფიკაციის გავლა (მაგრამ თუ ტოკენი არ მოიძებნა ისევ Spotify ავტორიზაციის გვერდზე გადაამისამართებს).

# TOOLS
Frontend: React, React Router, Framer Motion, Axios
Authentication: Spotify OAuth
Styling: CSS
Deployment: Vercel

# FEATURES
Dark/Light Mode Switch
Responsive Design
Spotify Authenticaiton

# პროექტის ლოკალურად გაშვება
კლონირება:
 git clone https://github.com/your-username/final-spotify-react.git
 cd final-spotify-react

 დეფენდენციების ჩამოტვირთვა:
 npm install

 .env ფაილში:
  REACT_APP_SPOTIFY_CLIENT_ID=your_spotify_client_id.
  REACT_APP_SPOTIFY_CLIENT_SECRET=your_spotify_client_secret.
  REACT_APP_SPOTIFY_REDIRECT_URI=https://final-spotify-react.vercel.app/
(ინფორმაცია client id, client secret - მოცემულია [Spotify Developer Das](https://developer.spotify.com/dashboard))
![image](https://github.com/user-attachments/assets/1a26e64f-2401-408d-a58c-743d725e50ef)


გაშვება:
 npm start

# Vercel Deployment
დავფუშოთ github-ზე და დავაკკავშიროთ ჩვენი გითჰაბ repository- Vercel-ს.
Vercel-ში უნდა დავაყენოთ environment variables:
REACT_APP_SPOTIFY_CLIENT_ID
REACT_APP_SPOTIFY_REDIRECT_URI
(ინფორმაცია მოცემულია [Spotify Developer Das](https://developer.spotify.com/dashboard))


დაჰოსთვის შემდეგ დაგენერირებული URL ლინკი უნდა განვათავსოთ
![image](https://github.com/user-attachments/assets/7bb31094-596d-4210-9a06-4535fdc357bb)
Redirect URI-ში, რათა მოხდეს მანდ გადამისამართება სფოთფაის მიერ, როცა იუზერი გაივლის ავთენთიფიკაციას.

