import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroesScreen } from '../components/heroes/HeroesScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { Navbar } from '../components/ui/NavBar';
import { SearchScreen } from '../components/searchs/SearchScreen';


export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen}/>
                    <Route exact path="/heroe/:heroeId" component={HeroesScreen}/>
                    <Route exact path="/dc" component={DcScreen}/>
                    <Route exact path="/buscar" component={SearchScreen}/>
                    {/* Si no encuentra ninguno de los anteriores llama a /marvel */}
                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    )
}
