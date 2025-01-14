<?php

/*
 * This file is part of Sulu.
 *
 * (c) Sulu GmbH
 *
 * This source file is subject to the MIT license that is bundled
 * with this source code in the file LICENSE.
 */

namespace Sulu\Component\CustomUrl\Routing\Enhancers;

use Sulu\Component\CustomUrl\Document\CustomUrlBehavior;
use Sulu\Component\Webspace\Manager\WebspaceManagerInterface;
use Sulu\Component\Webspace\Webspace;
use Symfony\Component\HttpFoundation\Request;

/**
 * Append seo information to route.
 */
class SeoEnhancer extends AbstractEnhancer
{
    public function __construct(private WebspaceManagerInterface $webspaceManager)
    {
    }

    protected function doEnhance(
        CustomUrlBehavior $customUrl,
        Webspace $webspace,
        array $defaults,
        Request $request
    ) {
        $seo = [
            'noFollow' => $customUrl->isNoFollow(),
            'noIndex' => $customUrl->isNoIndex(),
        ];

        if ($customUrl->isCanonical()) {
            $resourceSegment = $customUrl->getTargetDocument()->getResourceSegment();
            $seo['canonicalUrl'] = $this->webspaceManager->findUrlByResourceLocator(
                $resourceSegment,
                $defaults['_environment'],
                $customUrl->getTargetLocale(),
                $webspace->getKey(),
                $request->getHost(),
                $request->getScheme()
            );
        }

        return ['_seo' => $seo];
    }

    protected function supports(CustomUrlBehavior $customUrl)
    {
        return null !== $customUrl->getTargetDocument();
    }
}
