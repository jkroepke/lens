/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getInjectable } from "@ogre-tools/injectable";

import storageClassesRouteInjectable from "../../../common/front-end-routing/routes/cluster/storage/storage-classes/storage-classes-route.injectable";
import storageSidebarItemInjectable from "../storage/storage-sidebar-items.injectable";
import { sidebarItemInjectionToken } from "@k8slens/cluster-sidebar";
import routeIsActiveInjectable from "../../routes/route-is-active.injectable";
import navigateToStorageClassesInjectable from "../../../common/front-end-routing/routes/cluster/storage/storage-classes/navigate-to-storage-classes.injectable";

const storageClassesSidebarItemInjectable = getInjectable({
  id: "storage-classes-sidebar-item",

  instantiate: (di) => {
    const route = di.inject(storageClassesRouteInjectable);

    return {
      id: "storage-classes",
      parentId: di.inject(storageSidebarItemInjectable).id,
      title: "Storage Classes",
      onClick: di.inject(navigateToStorageClassesInjectable),
      isActive: di.inject(routeIsActiveInjectable, route),
      isVisible: route.isEnabled,
      orderNumber: 30,
    };
  },

  injectionToken: sidebarItemInjectionToken,
});

export default storageClassesSidebarItemInjectable;
