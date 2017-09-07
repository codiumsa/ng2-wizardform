var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { WizardStep } from './wizard-step.interface';
/**
 * Basic functionality every wizard completion step needs to provide
 *
 * @author Marc Arndt
 */
var WizardCompletionStep = (function (_super) {
    __extends(WizardCompletionStep, _super);
    /**
     * Constructor
     */
    function WizardCompletionStep() {
        return _super.call(this) || this;
    }
    return WizardCompletionStep;
}(WizardStep));
export { WizardCompletionStep };
//# sourceMappingURL=wizard-completion-step.inferface.js.map