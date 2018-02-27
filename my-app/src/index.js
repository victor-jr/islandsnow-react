import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Image, Container, Header, Menu, Dropdown, Icon, Divider, List, Input } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item fitted><Icon name="facebook f" /></Menu.Item>
            <Menu.Item fitted><Icon name="twitter" /></Menu.Item>
            <Menu.Item fitted><Icon name="pinterest" /></Menu.Item>
            <Menu.Item fitted><Icon name="instagram" /></Menu.Item>
            <Menu.Item fitted position="right"><Icon name="home" /></Menu.Item>
            <Menu.Item fitted><Icon name="search" /></Menu.Item>
            <Menu.Item fitted><Icon name="user" /></Menu.Item>
            <Dropdown item text="MY CART 0" icon="shop">
              <Dropdown.Menu>
                <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
    )
  }
}

class IslandSnowLogo extends React.Component {
  render() {
    return (
        <Image centered src="https://cdn.shopify.com/s/files/1/1035/5187/t/5/assets/logo.png?15691486226381689305" />
    )
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
      <Grid container centered>
        <Menu className="bottommenu" borderless>
          <Dropdown item text="MEN">
            <Dropdown.Menu>
              <Dropdown.Item>Item 1</Dropdown.Item>
              <Dropdown.Item>Item 2</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text="WOMEN">
            <Dropdown.Menu>
              <Dropdown.Item>Item 1</Dropdown.Item>
              <Dropdown.Item>Item 2</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text="KIDS">
            <Dropdown.Menu>
              <Dropdown.Item>Item 1</Dropdown.Item>
              <Dropdown.Item>Item 2</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text="BRANDS">
            <Dropdown.Menu>
              <Dropdown.Item>Item 1</Dropdown.Item>
              <Dropdown.Item>Item 2</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item className="bottommenu">SEARCH</Menu.Item>
        </Menu>
      </Grid>
    );
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
      <Image fluid src="https://cdn.shopify.com/s/files/1/1035/5187/t/5/assets/slide1.jpg?15691486226381689305" />
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <div className="footer">
          <Grid container columns={3}>
            <Grid.Column inverted>
              <h2>Navigation</h2>
              <hr/>
              <List>
                <List.Item>About Us</List.Item>
                <List.Item>Videos</List.Item>
                <List.Item>Store Locations</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column inverted>
              <h2>Main Menu</h2>
              <hr/>
              <List>
                <List.Item>Men</List.Item>
                <List.Item>Women</List.Item>
                <List.Item>Kids</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column inverted>
              <h2>Connect</h2>
              <hr/>
              Sign up for latest updates
              <Input placeholder="Enter email address" inverted label={{content:"Join", color:"black"}} labelPosition="right"/>
            </Grid.Column>
          </Grid>
        </div>
    )
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <Divider hidden={true} />
          <IslandSnowLogo/>
          <Divider hidden={true} />
          <MiddleMenu/>
          <Divider hidden={true} />
          <FullWidthImage/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));
