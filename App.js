import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Inicial from './app/Inicial';
import Splash from './app/Splash';
import Cadastro from './app/Cadastro';
import DetalheProduto from './app/DetalheProduto';
import Carrinho from './app/Carrinho';
import Login from './app/Login';
import Catalogo from './app/Catalogo';
import PesquisarProduto from './app/PesquisarProduto';
import Mapa from './app/Mapa';
import CadastroEndereco from './app/CadastroEndereco';
import StatusEntrega from './app/StatusEntrega';
import Pagamento from './app/Pagamento';
import EnviarReceita from './app/EnviarReceita';
import HistoricoPedidos from './app/HistoricoPedidos';
import HistoricoEntrega from './app/HistoricoEntrega';
import CadastroProduto from './app/CadastroProduto';
import { AuthProvider } from './app/contexts/AuthContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Inicial"
            component={Inicial}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DetalheProduto"
            component={DetalheProduto}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Cadastro"
            component={Cadastro}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Catalogo"
            component={Catalogo}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Carrinho"
            component={Carrinho}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PesquisarProduto"
            component={PesquisarProduto}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Mapa"
            component={Mapa}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CadastroEndereco"
            component={CadastroEndereco}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="StatusEntrega"
            component={StatusEntrega}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Pagamento"
            component={Pagamento}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EnviarReceita"
            component={EnviarReceita}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HistoricoPedidos"
            component={HistoricoPedidos}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HistoricoEntrega"
            component={HistoricoEntrega}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CadastroProduto"
            component={CadastroProduto}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
