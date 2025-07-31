import ChiefCard from "./ChiefCard"

export default function ChiefsSection(){
    const chiefs = [
        {
            name: "Chef Abbys",
            img: "https://www.myjoyonline.com/wp-content/uploads/2025/07/Ghanas-Chef-Abbys-makes-TIMEs-100-Most-Influential-Creators-list-470x424.jpg",
            recipesCount: "10",
            cuisine: "Ghanaian",
        },
        {
            name: "Chef Smith",
            img: "https://ameyawdebrah.com/wp-content/uploads/2024/02/CHEF-42.jpg",
            recipesCount: "05",
            cuisine: "Japanese",
        },
        {
            name: "Chef Maame Boakye",
            img: "https://www.cuisinenoir.com/wp-content/uploads/2020/08/Cuisine-Noir-Chef-Maame-Profile-Photo-copy.jpeg",
            recipesCount: "13",
            cuisine: "Ghanaian",
        },
        {
            name: "Hilda Baci",
            img: "https://ameyawdebrah.com/wp-content/uploads/2023/05/IMG_4840.jpeg",
            recipesCount: "08",
            cuisine: "Nigerian"
        },
        {
            name: "Chef Francis Otoo",
            img: "https://pbs.twimg.com/media/Ec2deQVXgAE2S5e.jpg",
            recipesCount: "09",
            cuisine: "French"
        },
        {
            name: "Chef Faila",
            img: "https://ameyawdebrah.com/wp-content/uploads/2024/03/chef-faila.jpg",
            recipesCount: "04",
            cuisine: "Ghanaian" 

        }
    ]
    return (
        <div className="section chiefs">
            <h1 className="title">Our Top Chiefs</h1>
            <div className="top-chiefs-container">
                {/* <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard /> */}
                { chiefs.map(chief => <ChiefCard key={chief.name} chief={chief} />) }
            </div>
        </div>
    )
}