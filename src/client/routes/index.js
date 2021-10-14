import Accueil from '../views/Accueil'
import Inscription from '../views/Inscription'
import Connexion from '../views/Connexion'
export default[
        {
            path:'/',
            component:Accueil,
            name:'AccueilClient'
        },
        {
            path:'/inscription',
            component:Inscription,
            name:'inscription'
        },
        {
            path:'/connexion',
            component:Connexion,
            name:'connexion'
        },
    ]