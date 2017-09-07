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
import { ContentChild, Directive, EventEmitter, forwardRef, HostBinding, Inject, Input, Output } from '@angular/core';
import { WizardComponent } from '../components/wizard.component';
import { WizardStep } from '../util/wizard-step.interface';
import { WizardStepTitleDirective } from './wizard-step-title.directive';
import { WizardCompletionStep } from '../util/wizard-completion-step.inferface';
/**
 * The `wizardCompletionStep` directive can be used to define a completion/success step at the end of your wizard
 * After a [[WizardCompletionStep]] has been entered, it has the characteristic that the user is blocked from
 * leaving it again to a previous step.
 * In addition entering a [[WizardCompletionStep]] automatically sets the `wizard` amd all steps inside the `wizard`
 * as completed.
 *
 * ### Syntax
 *
 * ```html
 * <div wizardCompletionStep [title]="title of the wizard step" [navigationSymbol]="navigation symbol"
 *    [navigationSymbolFontFamily]="navigation symbol font family"
 *    (stepEnter)="event emitter to be called when the wizard step is entered"
 *    (stepExit)="event emitter to be called when the wizard step is exited">
 *    ...
 * </div>
 * ```
 *
 * ### Example
 *
 * ```html
 * <div wizardCompletionStep title="Step 1" navigationSymbol="1">
 *    ...
 * </div>
 * ```
 *
 * With a navigation symbol from the `font-awesome` font:
 *
 * ```html
 * <div wizardCompletionStep title="Step 1" navigationSymbol="&#xf1ba;" navigationSymbolFontFamily="FontAwesome">
 *    ...
 * </div>
 * ```
 *
 * @author Marc Arndt
 */
var WizardCompletionStepDirective = (function (_super) {
    __extends(WizardCompletionStepDirective, _super);
    /**
     * Constructor
     * @param wizard The [[WizardComponent]], this completion step is contained inside
     */
    /* istanbul ignore next */
    function WizardCompletionStepDirective(wizard) {
        var _this = _super.call(this) || this;
        _this.wizard = wizard;
        /**
         * @inheritDoc
         */
        _this.navigationSymbol = '';
        /**
         * @inheritDoc
         */
        _this.stepEnter = new EventEmitter();
        /**
         * @inheritDoc
         */
        _this.stepExit = new EventEmitter();
        /**
         * @inheritDoc
         */
        _this.selected = false;
        /**
         * @inheritDoc
         */
        _this.optional = false;
        /**
         * @inheritDoc
         */
        _this.canExit = false;
        return _this;
    }
    Object.defineProperty(WizardCompletionStepDirective.prototype, "hidden", {
        /**
         * @inheritDoc
         */
        get: function () {
            return !this.selected;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @inheritDoc
     */
    WizardCompletionStepDirective.prototype.enter = function (direction) {
        this.wizard.completed = true;
        this.stepEnter.emit(direction);
    };
    /**
     * @inheritDoc
     */
    WizardCompletionStepDirective.prototype.exit = function (direction) {
        this.wizard.completed = false;
        this.stepExit.emit(direction);
    };
    WizardCompletionStepDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[wizardCompletionStep]',
                    providers: [
                        { provide: WizardStep, useExisting: forwardRef(function () { return WizardCompletionStepDirective; }) },
                        { provide: WizardCompletionStep, useExisting: forwardRef(function () { return WizardCompletionStepDirective; }) }
                    ]
                },] },
    ];
    /** @nocollapse */
    WizardCompletionStepDirective.ctorParameters = function () { return [
        { type: WizardComponent, decorators: [{ type: Inject, args: [forwardRef(function () { return WizardComponent; }),] },] },
    ]; };
    WizardCompletionStepDirective.propDecorators = {
        'titleTemplate': [{ type: ContentChild, args: [WizardStepTitleDirective,] },],
        'title': [{ type: Input },],
        'navigationSymbol': [{ type: Input },],
        'navigationSymbolFontFamily': [{ type: Input },],
        'stepEnter': [{ type: Output },],
        'hidden': [{ type: HostBinding, args: ['hidden',] },],
    };
    return WizardCompletionStepDirective;
}(WizardCompletionStep));
export { WizardCompletionStepDirective };
//# sourceMappingURL=wizard-completion-step.directive.js.map