const {Layout, Input, List, Col, Row}=antd
const { Header, Content, Sider, Footer } = Layout;
const { TextArea, Search, Password } = Input;

const {Item}=List
const eel = window["eel"];


const RenderComponent = ({ componentData}) => {
    eel.set_host("ws://localhost:8888");
    const { component, props, content } = componentData;
    
    const renderChildren = () => {
      return content.map((child, index) => {
        if (typeof child === 'string') {
          return <div key={index}>{child}</div>;
        } else if (typeof child === 'object') {
          return <RenderComponent key={index} componentData={child} />;
        }
        return null;
      });
    };
  
    const renderSwitch = (component) => {
        const componentProps = props || {};
        switch (component) {
          case 'Footer':
            
            return <Footer {...componentProps}>{renderChildren()}</Footer>;
          case 'Row':
            
            return <Row {...componentProps}>{renderChildren()}</Row>;

          case 'Col':
            
            return <Col {...componentProps}>{renderChildren()}</Col>;

          case 'ListItem':
            
            return <Item {...componentProps}>{renderChildren()}</Item>;

          case 'Header':
            
            return <Header {...componentProps}>{renderChildren()}</Header>;
          case 'Content':
            
            return <Content {...componentProps}>{renderChildren()}</Content>;
          case 'Sider':
            
            return <Sider {...componentProps}>{renderChildren()}</Sider>;

          case 'Button':
            const {Button} = antd
            return <Button {...componentProps}>{renderChildren()}</Button>;

          case 'FloatButton':
            const {FloatButton} = antd 
            return <FloatButton {...componentProps}>{renderChildren()}</FloatButton>;
          case 'New':
            //'New' 
            return <New {...componentProps}>{renderChildren()}</New>;
          case 'Icon':
            //'Icon' 
            return <Icon {...componentProps}>{renderChildren()}</Icon>;
          case 'Typography':
            const { Typography } = antd; 
            return <Typography {...componentProps}>{renderChildren()}</Typography>;
          case 'Divider':
            const { Divider } = antd;
            return <Divider {...componentProps} />;
          case 'Grid':
            const { Grid } = antd;
            return <Grid {...componentProps}>{renderChildren()}</Grid>;
          case 'Layout':
            const { Layout } = antd;
            const layoutProps = componentProps;
            return <Layout>{renderChildren()}</Layout>;
          case 'Space':
            const { Space } = antd;
            return <Space {...componentProps}>{renderChildren()}</Space>;
          case 'Anchor':
            const { Anchor } = antd;
            return <Anchor {...componentProps}>{renderChildren()}</Anchor>;
          case 'Breadcrumb':
            const { Breadcrumb } = antd;
            return <Breadcrumb {...componentProps}>{renderChildren()}</Breadcrumb>;
          case 'Dropdown':
            const { Dropdown } = antd;
            return <Dropdown {...componentProps}>{renderChildren()}</Dropdown>;
          case 'Menu':
            const { Menu } = antd;
            
            return <Menu {...componentProps}>{renderChildren()}</Menu>;
          case 'Pagination':
            const { Pagination } = antd;
            return <Pagination {...componentProps} />;
          case 'Steps':
            const { Steps } = antd;
            return <Steps {...componentProps}>{renderChildren()}</Steps>;
          
          case 'AutoComplete':
            const { AutoComplete } = antd;
            return <AutoComplete {...componentProps}>{renderChildren()}</AutoComplete>;
          case 'Cascader':
            const { Cascader } = antd;
            return <Cascader {...componentProps} />;
          case 'Checkbox':
            const { Checkbox } = antd;
            return <Checkbox {...componentProps}>{renderChildren()}</Checkbox>;
          case 'ColorPicker':
            const { ColorPicker } = antd; 
            return <ColorPicker {...componentProps}>{renderChildren()}</ColorPicker>;
          case 'DatePicker':
            const { DatePicker } = antd;
            return <DatePicker {...componentProps} />;
          case 'Form':
            const { Form } = antd;
            return <Form {...componentProps}>{renderChildren()}</Form>;
          case 'TextArea':
            return <TextArea {...componentProps} />;
          case 'Input':
            return <Input {...componentProps} />;
          case 'Serach':
            return <Search {...componentProps} />;
          case 'Password':
            return <Password {...componentProps} />;
          case 'InputNumber':
            const { InputNumber } = antd;
            return <InputNumber {...componentProps} />;
          case 'Mentions':
            const { Mentions } = antd;
            return <Mentions {...componentProps}>{renderChildren()}</Mentions>;
          case 'Radio':
            const { Radio } = antd;
            return <Radio {...componentProps}>{renderChildren()}</Radio>;
          case 'Rate':
            const { Rate } = antd;
            return <Rate {...componentProps} />;
          case 'Select':
            const { Select } = antd;
            return <Select {...componentProps}>{renderChildren()}</Select>;

          case 'Slider':

            const { Slider } = antd;
            const handel_onchange=(e)=>{
              eel.slider_handler(e)(function(number){
                      console.log(`die daten für Slider sind geschickt: ${e}`)
                  })
              }
            return <Slider {...componentProps} onChange={handel_onchange}/>;


          case 'Switch':
            const { Switch } = antd;
            return <Switch {...componentProps} />;
          case 'TimePicker':
            const { TimePicker } = antd;
            return <TimePicker {...componentProps} />;
          case 'Transfer':
            const { Transfer } = antd;
            return <Transfer {...componentProps} />;
          case 'TreeSelect':
            const { TreeSelect } = antd;
            return <TreeSelect {...componentProps}>{renderChildren()}</TreeSelect>;
          case 'Upload':
            const { Upload } = antd;
            return <Upload {...componentProps}>{renderChildren()}</Upload>;

          case 'Avatar':
            const { Avatar } = antd;
            return <Avatar {...componentProps} />;
          case 'Badge':
            const { Badge } = antd;
            return <Badge {...componentProps}>{renderChildren()}</Badge>;
          case 'Calendar':
            const { Calendar } = antd;
            return <Calendar {...componentProps} />;
          case 'Card':
            const { Card } = antd;
            return <Card {...componentProps}>{renderChildren()}</Card>;
          case 'Carousel':
            const { Carousel } = antd;
            return <Carousel {...componentProps}>{renderChildren()}</Carousel>;
          case 'Collapse':
            const { Collapse } = antd;
            return <Collapse {...componentProps}>{renderChildren()}</Collapse>;
          case 'Empty':
            const { Empty } = antd;
            return <Empty {...componentProps} />;
          case 'Image':
            const { Image } = antd;
            return <Image {...componentProps} />;
          case 'List':
            const { List } = antd;
            return <List {...componentProps}>{renderChildren()}</List>;
          case 'Popover':
            const { Popover } = antd;
            return <Popover {...componentProps}>{renderChildren()}</Popover>;
          case 'QRCode':
            const { QRCode } = antd;
            const [text, setText] = React.useState('https://ant.design/')
            return <QRCode {...componentProps} value={text || '-'}/>;
          case 'Segmented':
            const { Segmented } = antd;
            return <Segmented {...componentProps}>{renderChildren()}</Segmented>;
          case 'Statistic':
            const { Statistic } = antd;
            return <Statistic {...componentProps}>{renderChildren()}</Statistic>;
          case 'Table':
            const { Table } = antd;
            return <Table {...componentProps} />;
          case 'Tabs':
            const { Tabs } = antd;
            return <Tabs {...componentProps}>{renderChildren()}</Tabs>;
          case 'Tag':
            const { Tag } = antd;
            return <Tag {...componentProps}>{renderChildren()}</Tag>;
          case 'Timeline':
            const { Timeline } = antd;
            return <Timeline {...componentProps}>{renderChildren()}</Timeline>;
          case 'Tooltip':
            const { Tooltip } = antd;
            return <Tooltip {...componentProps}>{renderChildren()}</Tooltip>;
          case 'Tour':
            const { Tour } = antd;
            return <Tour {...componentProps}>{renderChildren()}</Tour>;
          case 'Tree':
            const { Tree } = antd;
            return <Tree {...componentProps}>{renderChildren()}</Tree>;
          case 'Alert':
            const { Alert } = antd;
            return <Alert {...componentProps}>{renderChildren()}</Alert>;
          case 'Drawer':
            const { Drawer } = antd;
            return <Drawer {...componentProps}>{renderChildren()}</Drawer>;
          case 'Message':
            //'Message' 
            return <Message {...componentProps}>{renderChildren()}</Message>;
          case 'Modal':
            const { Modal } = antd;
            return <Modal {...componentProps}>{renderChildren()}</Modal>;
          case 'Notification':
            //'Notification' 
            return <Notification {...componentProps}>{renderChildren()}</Notification>;
          case 'Popconfirm':
            const { Popconfirm } = antd;
            return <Popconfirm {...componentProps}>{renderChildren()}</Popconfirm>;
          case 'Progress':
            const { Progress } = antd;
            return <Progress {...componentProps} />;
          case 'Result':
            const { Result } = antd;
            return <Result {...componentProps}>{renderChildren()}</Result>;
          case 'Skeleton':
            const { Skeleton } = antd;
            return <Skeleton {...componentProps} />;
          case 'Spin':
            const { Spin } = antd;
            return <Spin {...componentProps}>{renderChildren()}</Spin>;
          case 'Watermark':
            const { Watermark } = antd; 
            return <Watermark {...componentProps}>{renderChildren()}</Watermark>;
          case 'Affix':
            const { Affix } = antd;
            return <Affix {...componentProps}>{renderChildren()}</Affix>;
          case 'App':
            const { App } = antd;
            return <App {...componentProps}>{renderChildren()}</App>;
          case 'ConfigProvider':
            const { ConfigProvider } = antd;
            return <ConfigProvider {...componentProps}>{renderChildren()}</ConfigProvider>;
          case'ReactNode':
            return React.createElement(componentProps.node,{...componentProps},renderChildren())
          default:
            return null;
        }
      };
    return renderSwitch(component);
};
