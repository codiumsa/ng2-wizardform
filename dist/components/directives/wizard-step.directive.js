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
import { ContentChild, Directive, EventEmitter, forwardRef, HostBinding, Input, Output } from '@angular/core';
import { WizardStep } from '../util/wizard-step.interface';
import { WizardStepTitleDirective } from './wizard-step-title.directive';
/**
 * The `wizardStep` directive can be used to define a normal step inside a wizard.
 *
 * ### Syntax
 *
 * With `title` input:
 *
 * ```html
 * <div wizardStep [title]="step title" [navigationSymbol]="symbol" [navigationSymbolFontFamily]="font-family"
 *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
 *    ...
 * </div>
 * ```
 *
 * With `wizardStepTitle` directive:
 *
 * ```html
 * <div wizardStep [navigationSymbol]="symbol" [navigationSymbolFontFamily]="font-family"
 *    [canExit]="deciding function" (stepEnter)="enter function" (stepExit)="exit function">
 *    <ng-template wizardStepTitle>
 *        step title
 *    </ng-template>
 *    ...
 * </div>
 * ```
 *
 * ### Example
 *
 * With `title` input:
 *
 * ```html
 * <div wizardStep title="Address information" navigationSymbol="&#xf1ba;" navigationSymbolFontFamily="FontAwesome">
 *    ...
 * </div>
 * ```
 *
 * With `wizardStepTitle` directive:
 *
 * ```html
 * <div wizardStep navigationSymbol="&#xf1ba;" navigationSymbolFontFamily="FontAwesome">
 *    <ng-template wizardStepTitle>
 *        Address information
 *    </ng-template>
 * </div>
 * ```
 *
 * @author Marc Arndt
 */
var WizardStepDirective = (function (_super) {
    __extends(WizardStepDirective, _super);
    /**
     * Constructor
     */
    function WizardStepDirective() {
        var _this = _super.call(this) || this;
        /**
         * @inheritDoc
         */
        _this.navigationSymbol = '';
        /**
         * @inheritDoc
         */
        _this.canExit = true;
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
        _this.completed = false;
        /**
         * @inheritDoc
         */
        _this.selected = false;
        /**
         * @inheritDoc
         */
        _this.optional = false;
        return _this;
    }
    Object.defineProperty(WizardStepDirective.prototype, "hidden", {
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
    WizardStepDirective.prototype.enter = function (direction) {
        this.stepEnter.emit(direction);
    };
    /**
     * @inheritDoc
     */
    WizardStepDirective.prototype.exit = function (direction) {
        this.stepExit.emit(direction);
    };
    WizardStepDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[wizardStep]',
                    providers: [
                        { provide: WizardStep, useExisting: forwardRef(function () { return WizardStepDirective; }) }
                    ]
                },] },
    ];
    /** @nocollapse */
    WizardStepDirective.ctorParameters = function () { return []; };
    WizardStepDirective.propDecorators = {
        'titleTemplate': [{ type: ContentChild, args: [WizardStepTitleDirective,] },],
        'title': [{ type: Input },],
        'navigationSymbol': [{ type: Input },],
        'navigationSymbolFontFamily': [{ type: Input },],
        'canExit': [{ type: Input },],
        'stepEnter': [{ type: Output },],
        'stepExit': [{ type: Output },],
        'hidden': [{ type: HostBinding, args: ['hidden',] },],
    };
    return WizardStepDirective;
}(WizardStep));
export { WizardStepDirective };
//# sourceMappingURL=wizard-step.directive.js.map