//
// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license.
//
// Microsoft Bot Framework: http://botframework.com
//
// Bot Framework Emulator Github:
// https://github.com/Microsoft/BotFramwork-Emulator
//
// Copyright (c) Microsoft Corporation
// All rights reserved.
//
// MIT License:
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED ""AS IS"", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//

import * as React from 'react';
import { getSettings } from '../settings';
import { AddressBarActions } from '../reducers';
import { AddressBarOperators } from './addressBarOperators';
import { AddressBarStatus } from './addressBarStatus';
import { AddressBarTextBox } from './addressBarTextBox';
import { AddressBarRefresh } from './addressBarRefresh';
import { AddressBarMenu } from './addressBarMenu';
import { AddressBarSearch } from './addressBarSearch';
import { AddressBarBotCreds } from './addressBarBotCreds';


export class AddressBar extends React.Component<{}, {}> {

    pageClicked = (ev: Event) => {
        if (ev.defaultPrevented)
            return;
        const settings = getSettings();
        let target = ev.srcElement;
        while (target) {
            // NOTE: Sometimes target.className is not a string. In one observed instance it was an SVGAnimatedString which didn't have an 'includes' function.
            if (target.className && target.className.toString().includes("addressbar")) {
                ev.preventDefault();
                return;
            }
            target = target.parentElement;
        }

        // Click was outside the address bar. Close open subpanels.
        AddressBarOperators.clearMatchingBots();
        if (settings.addressBar.showSearchResults)
            AddressBarActions.hideSearchResults();
        if (settings.addressBar.showBotCreds)
            AddressBarActions.hideBotCreds();
    }

    componentWillMount() {
        window.addEventListener('click', (e) => this.pageClicked(e));
    }

    componentWillUnmount() {
        window.removeEventListener('click', (e) => this.pageClicked(e));
    }

    render() {
        return (
            <div className="addressbar">
                <AddressBarStatus />
                <AddressBarTextBox />
                <AddressBarRefresh />
                <AddressBarMenu />
                <AddressBarSearch />
                <AddressBarBotCreds />
            </div>
        );
    }
}
