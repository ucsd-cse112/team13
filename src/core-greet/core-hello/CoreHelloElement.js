import CoreElement from '../../core-element/CoreElement';
import CoreGreetElement from '../CoreGreetElement';

const HELLO_STRING = {
  en: 'Hello',
  es: 'Hola',
  jp: 'こんにちは',
  fr: 'Bonjour',
};

/** An element that displays "Hello" with the passed-in name. */
class CoreHelloElement extends CoreGreetElement {
  /** Creates a CoreHello element. */
  constructor() {
    super(HELLO_STRING);
  }
}

CoreElement.customTag('core-hello', CoreHelloElement);

export default CoreHelloElement;
