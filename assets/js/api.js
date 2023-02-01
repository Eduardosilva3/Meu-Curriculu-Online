

async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/Eduardosilva3/Meu-Curriculu-Online/main/data/profile.json';
    const fetching = await fetch(url);
    
    return await fetching.json()
}