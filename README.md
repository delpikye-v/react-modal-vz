<div align="center">
    <h1>react-modal-vz</h1>
    <a href="https://github.com/delpikye-v/react-modal">react-modal-vz</a>
    <br />
    <br />
    <b><a href="https://codesandbox.io/s/t4wfop">LIVE EXAMPLE</a></b>
</div>

---

#### Description

+ Simple modal.
+ Append to portal.
+ Remade: <a href="https://www.npmjs.com/package/react-modal-e2z">react-modal-e2z</a>

#### Preview
![React-Modal](https://github.com/delpikye-v/react-modal-vz/blob/main/preview.png)
---
### Usage

Install the package

```js
npm install --save react-modal-vz
```

Import the module in the place you want to use:
```js
import "react-modal-vz/build/styles.css";
import Modal, { ModalBusUtils } from "react-modal-vz";

// Add modal to top AppFile
```

#### Snippet
##### option 1
```js
    const [isShow, setShow] = React.useState(false);
    <Modal isOpen={isShow} center handleOpen={setShow}>
        This is modal
    </Modal>
```

##### option 2
```js
    // App.ts[js]
    <Modal>
        This is modal

        {/* <Modal>
          {[...Array(10)].map((item, index) => {
            return <div key={index}>index {index}</div>;
          })}
        </Modal> */}
    </Modal>

    // sub file
    <button onClick={() => ModalBusUtils.showModal()}>
      Show Modal
    </button>

    <button onClick={() => ModalBusUtils.hideModal()}>
      Hide Modal
    </button>

    <button
          onClick={() => {
            ModalBusUtils.showModalWithProps({
              ...ModalProps, // props modal
            });
          }};
    >
        Show with props
    </button>
```

------------

#### ModalProps

see <b>index.d.ts</b>

| props                        | type                                  | description                                                                |
|------------------------------|---------------------------------------|----------------------------------------------------------------------------|
| id?: string;                 |     `string`                          |                                                                            |
| modalId?: string;            |     `string`                          |                                                                            |
| isOpen?: boolean;            |     `boolean`                         |                                                                            |
| center?: boolean;            |     `boolean`                         | `false`                                                                    |
| bottom?: boolean;            |     `boolean`                         | `false`                                                                    |
| className?: string;          |     `string`                          |                                                                            |
| fitHeight?: boolean;         |     `boolean`                         |                                                                            |
| tabIndex?: number;           |     `number`                          |                                                                            |
| animationType?:              |     `AnimateType`                     | `default`                                                                  |
| animationDuration?:          |     `string`                          | `1200ms`                                                                   |
| showHeader?: boolean;        |     `boolean`                         | `true`                                                                     |
| showFooter?: boolean;        |     `boolean`                         | `true`                                                                     |
| modalTitle?:                 |     `string / React.ReactNode`        |                                                                            |
| modalHeader?:                |     `string / React.ReactNode`        |                                                                            |
| modalFooter?:                |     `string / React.ReactNode`        |                                                                            |
| customizeXClose?:            |     `string / React.ReactNode`        |                                                                            |
| alignFooter?:                |     `center / right /  left`          | `right`                                                                    |
| fullButtonMobile?:           |     `boolean`                         | `true`                                                                     |
| showExtraButton?:            |     `boolean`                         | `false`                                                                    |
| showAcceptButton?:           |     `boolean`                         | `true`                                                                     |
| showCancelButton?:           |     `boolean`                         | `true`                                                                     |
| showXClose?:                 |     `boolean`                         | `true`                                                                     |
| disabledClose?:              |     `boolean`                         | `false`                                                                    |
| escapeClose?:                |     `boolean`                         | `true`                                                                     |
| lockBodyScroll?:             |     `boolean`                         | `true`                                                                     |
| closeOnBackdrop?:            |     `boolean`                         | `false`                                                                    |
| showSplitBorder?:            |     `boolean`                         | `true`                                                                     |
| toggleTitle?:                |     `boolean`                         | `false`                                                                    |
| fullSceen?:                  |     `boolean`                         | `false`                                                                    |
|&nbsp;                        |                                       |                                                                            |
| classNameAccept?:            |     `string`                          |                                                                            |
| classNameCancel?:            |     `string`                          |                                                                            |
| classNameExtra?:             |     `string`                          |                                                                            |
| labelAccept?:                |     `string`                          |                                                                            |
| labelCancel?:                |     `string`                          |                                                                            |
| labelExtra?:                 |     `string`                          |                                                                            |
| backdropDark?:               |     `boolean`                         | `false`                                                                    |
| handleToggle?:               |     `(toggle?: boolean) => any;`      |                                                                            |
| handleAccept?:               |     `() => any;`                      |                                                                            |
| handleCancel?:               |     `() => any;`                      |                                                                            |
| handleEscapse?:              |     `() => any;`                      |                                                                            |
| handleXClose?:               |     `() => any;`                      |                                                                            |
| handleExtra?:                |     `() => any;`                      |                                                                            |
| handleOpen?:                 |     `(isOpen: boolean) => any;`       |                                                                            |

<br />

#### Animation

```js
AnimateType =
  | 'slideInFromLeft'
  | 'slideInFromRight'
  | 'slideInFromTop'
  | 'slideInFromBottom'
  | 'fadeIn'
  | 'fadeInFromLeft'
  | 'fadeInFromRight'
  | 'fadeInFromTop'
  | 'fadeInFromBottom'
  | 'bounce'
  | 'popIn'
  | 'default' => // use default
```

#### Note
+ class for button action: modal2-danger-button, modal2-light-button, modal2-primary-button, modal2-secondary-button
+ disabledClose => no apply escapse, no display cancel and xclose.
+ escapeClose  => make sure you don't use 3rd library to close by escapse.
+ some case: set `position: relative;` for body
<br />

#### RUN

<b><a href="https://codesandbox.io/u/delpi.k">LIVE EXAMPLE</a>

<br />

### License

MIT
